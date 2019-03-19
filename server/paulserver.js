const express = require("express");
const axios = require("axios");
const db = require("./models");

const PORT = process.env.PORT || 8000;

const app = express();
// paul@gmail.com  password
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// login page
app.post("/", function(req, res) {
  console.log(req.body);
  db.User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(function(dbLoginCheck) {
      console.log(dbLoginCheck);
      res.json(dbLoginCheck);
    })
    .catch(function(err) {
      console.log(err);
    });
});

app.get("/", function(req, res) {
  res.json();
});

// Start the server
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
