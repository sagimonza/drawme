
var express			= require('express');
var LoggerFactory	= require('./logger.js');

var logger = LoggerFactory.createLogger("server");
var app = express();

app.use("/drawme", express.static("/var/www/drawme/client/www"));

app.get('/', function(req, res){
	res.send('hello world');
});

app.listen(8080);
