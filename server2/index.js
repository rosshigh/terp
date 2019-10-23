var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

var app = express();	

app.use(express.static('./public'));

console.log("Loading Mongoose functionality");
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://127.0.0.1/coffee');
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at mongodb://127.0.0.1/coffee');
});
mongoose.connection.once('open', function callback() {
  console.log("Mongoose connected to the database");
});

console.log("Attaching plugins");
app.use(bodyParser.json({limit: '1000mb'}));
app.use(bodyParser.urlencoded({limit: '1000mb', extended: true}));

var documents = require('./model');
var controllers = require('./controller')(app);

app.use(function (err, req, res, next) {
	console.log(err.stack)        
		var url_parts = url.parse(req.url);
		switch (err.status) {
			case 401:
				code = err.status;
				var msg = {event: 'error', code: 401, message: "Unauthorized Access-" + url_parts.pathname, error: 401, ip: req.connection.remoteAddress, err: err.stack.toString()};
				break;
			case 409:
				code = err.status;
				var msg = {event: 'error', code: 409, message: "Duplicate record found-" + url_parts.pathname, error: 409, ip: req.connection.remoteAddress, err: err.stack.toString()};
				break;
			case 404:      
				code = err.status;
				var msg = {event: 'error', code: 404, message: url_parts.pathname, error: 404, ip: req.connection.remoteAddress, err: err.stack.toString()};
				break;
			default:
				code = 500;
				var msg = {event: 'error', code: 500, message: url_parts.pathname, error: 500, ip: req.connection.remoteAddress, err: err.stack.toString()};
				break;
		}
		logger.logError(msg);
	
		return res.status(code).json(msg);
	
	  });

console.log("Creating HTTP server on port: 80");
require('http').createServer(app).listen(80, function () {
    console.log("HTTP Server listening on port: 80");
});


