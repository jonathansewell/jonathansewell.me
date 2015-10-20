var express = require('express');
var http = require('http');
var path = require('path');
var exphbs = require('express-handlebars');
var config = require('./lib/appConfig');

var app = express();

//template caching is on when in production (process.env.NODE_ENV === "production")
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

http.createServer(app);

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function(req, res) {
	res.render('home', {
		enableComments: false
	});
});

app.get('/posts/:post', function(req, res) {
	res.render(req.params.post, {
		enableComments: true
	});
});

//compression? https://github.com/expressjs/compression

// caching?
// var oneDay = 86400000;
// app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

app.use(function(req, res) {
	res.end('You\'re out biking');
});

app.listen(3000, config.appHost, function() {
	console.log('http server listening at http', config.appHost, config.appPort);
});