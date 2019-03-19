## Key Concepts and Terms 

-- look up in the documentation . Express Docs or W3schools - only watch a video if you plan on taking ACTIVE learning seroius like notes or flash cards or pause and code along and experiment 
-- find examples of each one before coding . 1. reference class activites 2. google exmaples of ... 
-- code it ! use each one several times in a sandbox to OWN the code

in Express.js `req` or `request` is an object with properties and values (and methods) containing the info gathered from the actual request - here are some KEY properties to know - I would MEMORIZE this info and keep it very close - make notes to help you and KNOW THIS well
```req.body - info from the body of the request 
req.params  - info in the url 
req.query  - other info in url after a `?q=`

// GET 'http://www.example.com/admin/new'
var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
console.log(fullUrl);


`res` or `response` is an object containing methods (also properties and values) that allow us to respond to the user request or send something back or do something with the request
```methods to KNOW
    res.json(send json back here);
    res.send(send some stuff back here);
   res.render()
    res.sendFile()
  res.status()
res.redirect()```

GET PUT POST DELETE 
CRUD 
