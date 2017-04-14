var Article = require('../models/Article.js')
var Note = require('../models/Note.js')

module.exports = function(app) {
	app.get('/', (req, res) => {
		res.render('index', {
			placeholder: "whatever"
		})
	})

	app.get('/scrape', (req, res) => {
		res.send('hit the scrape route.')
	})

	app.get('/articles', (req, res) => {
		Article.find({})
			.exec()
			.then((articles) => {
				res.json(articles)
			}).catch((err) => {
				res.send(`Error:${err}`)
			})
	})
}