// node azure with sequelize API to upload a file to cloud and also send file back for downlaod again
// Use this file as a controller in your express server 
// still need to test it lol also could be more dry with variables for some things
// FYI - I was using this for pdf invoices and xl docs so you see that name throughout
// also each one of my clients have their own db so I need to simplify this 

// needs some work check back but its all here 
const
  multer = require('multer')
  , inMemoryStorage = multer.memoryStorage()
  , uploadStrategy = multer({ storage: inMemoryStorage }).single('image')
  , azureStorage = require('azure-storage')
  , getStream = require('into-stream');

const {
  Aborter,
  BlockBlobURL,
  ContainerURL,
  ServiceURL,
  SharedKeyCredential,
  StorageURL,
  uploadStreamToBlockBlob,
  uploadFileToBlockBlob
} = require('@azure/storage-blob');

const fs = require("fs");
const path = require("path");
var db = require("../../models");

const ONE_MEGABYTE = 1024 * 1024;
const FOUR_MEGABYTES = 4 * ONE_MEGABYTE;
const ONE_MINUTE = 60 * 1000;

const getBlobName = originalName => {
  const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
  return `${identifier}-${originalName}`;
};


var Sequelize = require('sequelize');
var moment = require("moment");
moment.suppressDeprecationWarnings = true;

// a function to connect to db
function dbConnect(dbName){
  return new Sequelize(`yourdbconnectionstring/${dbName}`, 
  { pool: 
    {
      "max": 10,
      "min": 0,
      "idle": 25000,
      "acquire": 25000
    },
  dialectOptions: {
    encrypt: true, // req'd for mssql not sure other dialects, look at sequelize docs for dialect options
    requestTimeout: 300000
  }
  });
}
//express endpoints CRUD no update right now - just delete file if not needed 

module.exports = function(app) {
  app.post("/api/upload/:id", multer({ storage: inMemoryStorage }).single('file'), async function(req, res, next) {
    try{
      const aborter = Aborter.timeout(30 * ONE_MINUTE);
      const containerName = "invoices";
      // const localFilePath = req.file.path;
      const credentials = new SharedKeyCredential("yourblob", "key");
      const pipeline = StorageURL.newPipeline(credentials);
      const serviceURL = new ServiceURL(`https://YOURBLOBNAME.blob.core.windows.net`, pipeline);
    
      const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
      const blobName = getBlobName(req.file.originalname);
      const blockBlobURL = BlockBlobURL.fromContainerURL(containerURL, blobName);
      await blockBlobURL.upload(aborter,req.file.buffer, req.file.buffer.length);
      console.log(`Blob "${blobName}" is uploaded`);

      var dbInfo = req.params.id.split("-");
      const dbName = dbInfo[0];
      let periodStartDate = moment(dbInfo[1]+dbInfo[2]+dbInfo[3]).format("YYYY-MM-DD");
      let periodEndDate = moment(dbInfo[4]+dbInfo[5]+dbInfo[6]).format("YYYY-MM-DD");
      
      let createdAt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss.SSS');
      Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
        return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss');
      };
      var sequelize = await dbConnect(dbName); 
      var filePathUrl = `https://YOURBLOB.blob.core.windows.net/container_name_here/${blobName}`;
      await sequelize.query(`INSERT INTO Invoices (filePathUrl, reportingPeriodStart, reportingPeriodEnd, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)`, 
        { type: sequelize.QueryTypes.INSERT, replacements: [filePathUrl, periodStartDate, periodEndDate,  createdAt, moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')],})
        .then(async invoicesData => {
    
          res.redirect(`/api/get/${dbName}`);
        });
     
    } catch (e) {
      console.log(e);

      res.status(400).json({
        error: e.message
      });
    }
  });

  app.get("/api/get/:id", async function(req, res) {
    try{
      var sequelize = await dbConnect(req.params.id); 
      await sequelize.query(`SELECT * FROM Invoices`, 
        { type: sequelize.QueryTypes.SELECT})
        .then(async invoicesData => {
          res.json(invoicesData);
        });
     
    } catch (e) {
      console.log(e);
      res.status(400).json({
        error: e.message
      });
    }
  });

  app.delete("/api/delete/:id", async function(req, res) {
    try{
      let invoiceId = req.params.id.split("-")[0];
      let dbName = req.params.id.split("-")[1];
      var sequelize = await dbConnect(dbName); 
      
      await sequelize.query(`DELETE FROM Invoices WHERE id = ?`, 
        { type: sequelize.QueryTypes.DELETE, replacements: [invoiceId]})
        .then(async invoicesData => { 
          res.send("row deleted: "+invoiceId);
        });  
    } catch (e) {
      console.log(e);
      res.status(400).json({
        error: e.message
      });
    }
  });

  
};
