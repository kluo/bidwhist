var express = require('express');
var swig = require('swig');
var app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
swig.setDefaults({cache: false});

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});


app.listen(app.get('port'), function() {
  console.log('Listening on port %d', app.get('port'));
});