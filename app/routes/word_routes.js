export default function (app, db) {
	app.post('/lists', (req,res) => {
		const note = { text: req.body.body, title: req.body.title};
		db.collection('lists').insert(note, (err, result) => {
			if (err) {
				res.send({'error': 'An error has occured'});
			} else {
				res.send(result.ops);
			}
		});

		
	})
}