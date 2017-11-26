var ObjectID = require('mongodb').ObjectID;
export default function (app, db) {
	app.get('/lists', (req,res) => {
		db.collection('lists').find().toArray( (err,item) => {
			if (err){
				res.send('error': 'An error has occured');
			} else {
				res.send(item);
			}
		});

	});
	app.get('/lists/:id', (req,res) => {
		const id = req.params.id;
		const details = {'_id': ObjectID(id) };
		db.collection('lists').findOne(details, (err, item) => {
			if(err){
				res.send({'error': 'An error has occured'});

			} else {
				res.send(item);
			}
		});
	});
	app.post('/lists', (req, res) => {
		var list = { name: req.body.name, words: req.body.words }
		db.collection('lists').insert(list, (err, result) => {
			if (err) {
				res.send({'error': 'An error has occured'});
			} else {
				console.log(result.ops)
				res.send(result.ops);
			}
		});
	})

	app.post('/lists/:id', (req,res) => {
		const id = req.params.id;
		const details = {'_id': ObjectID(id)};
		db.collection('lists').update(
			{"_id": details},
			{ $push: { words: req.body.wordId} }
		)
	})

	app.delete('/lists/:id', (req,res) => {
		const id = req.params.id;
		const details = {'_id': ObjectID(id) };
		db.collection('lists').remove(details, (err, item) => {
			if(err){
				res.send({'error': 'An error has occured'});

			} else {
				res.send('Note '+id+' deleted!');
			}
		});
	});
}