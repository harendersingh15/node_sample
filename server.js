var http = require('http');
var express = require('express');
var supervisor = require('supervisor');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();


/***********************************middleware for the application***************************/

//app.use('/script', express.static(__dirname + './client/scripts'));
app.use(express.static(__dirname + '/client'));

//create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended : false }));

//parse application json
app.use(bodyParser.json());
//morgan to log the call in cosole for the dev enviornment.
app.use(morgan('dev'));

//api calling
var User = require('./server/User/login_api');

//console.log("Sum of two number is " + User.UserLogin(2,2));
//default url for the express api
app.get('/', function(req, res){
	res.sendFile(__dirname +'/index.html');
});

//port number for the application
app.listen(8000);

console.log('Port number 8000 has been cicked, for your service !!!');
