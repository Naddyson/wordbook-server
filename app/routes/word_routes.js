var ObjectID = require('mongodb').ObjectID;
export default function (app, db) {
	app.get('/words', (req,res) => {
		db.collection('words').find().toArray( (err,item) => {
			if (err){
				res.send('error': 'An error has occured');
			} else {
				res.send(item);
			}
		});

	});
	app.get('/words/:id', (req,res) => {
		const id = req.params.id;
		const details = {'_id': ObjectID(id) };
		db.collection('words').findOne(details, (err, item) => {
			if(err){
				res.send({'error': 'An error has occured'});

			} else {
				res.send(item);
			}
		});
	});
	app.post('/words', (req, res) => {
		var word = { word: req.body.word, translation: req.body.translation, description: req.body.description }
		db.collection('words').insert(word, (err, result) => {
			if (err) {
				res.send({'error': 'An error has occured'});
			} else {
				console.log(result.ops)
				res.send(result.ops);
			}
		});

		
	})
}