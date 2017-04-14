module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index', {
			placeholder: "whatever",
			layout: false
		})
	})

	app.get('/scrape', function(req, res) {
		res.send('hit the scrape route.')
	})
}