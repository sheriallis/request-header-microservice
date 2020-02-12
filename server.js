var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })) 


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint...
app.get("/api/whoami", function (req, res) {
  const ipaddress = req.ip;
  const software = req.headers['user-agent'];
  const language = req.acceptsLanguages()[0];
  
  res.json({
    ipaddress,
    language,
    software
  });
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
