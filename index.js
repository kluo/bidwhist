var express = require('express');
var swig = require('swig');
var app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
swig.setDefaults({cache: false});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});