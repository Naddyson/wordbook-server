import express from 'express'
import MongoDB from 'mongodb'
import bodyParser from 'body-parser'
import routes  from './app/routes/index.js';
import db from "./db"

const app = express();
const MongoClient = MongoDB.MongoClient();
const port = 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

MongoClient.connect(db.url, (err, database) => {
	if (err) return console.log(err)
	routes(app, database);
	app.listen(port, () => {
		console.log('We are live on ' + port);
	});
})




