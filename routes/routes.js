module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index', {
			placeholder: "whatever"
		})
	})

	app.get('/scrape', function(req, res) {
		res.send('hit the scrape route.')
	})
}