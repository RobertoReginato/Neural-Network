var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var path = require('path');
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/js/build', function(req, res) {
  res.sendFile(path.join(__dirname + '/js'));
});

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(port, function () {
  // console.log('Example app listening on port 3000!');
});