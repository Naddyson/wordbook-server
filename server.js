import express from 'express'
import MongoDB from 'mongodb'
import bodyParser from 'body-parser'
import routes  from './app/routes/index.js';
import db from "./db"
import cors from 'cors'
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 8081;
/*var options = {
	useMongoClient:true
}*/
app.use(cors()) //cross origin request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(db.url, (err, database) => {
	if (err) return console.log(err)
	routes(app, database);
	app.listen(port, () => {
		console.log('We are live on ' + port);
	});
})




