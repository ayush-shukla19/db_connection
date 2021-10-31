const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

const mysql = require('mysql');
// connection configurations

const mc = mysql.createConnection({
	// credential of the dat base
	host: 'localhost',
	user: 'ashu',
	password:'ashutosh',
	database: 'test'
});

mc.connect();

app.listen(port);

console.log('API server statred on tha port : '+port);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes');

routes(app);
