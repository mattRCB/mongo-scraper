var request = require('request-promise')
var cheerio = require('cheerio')

var Article = require('../models/Article.js')
var Note = require('../models/Note.js')

module.exports = function(app) {
	app.get('/', (req, res) => {
		request("https://www.reddit.com/r/webdev", (error, response, html) => {
			var $ = cheerio.load(html)
			var result = []
			$("p.title").each(function(i, element) {
				var title = $(this).text()
				var link = $(element).children().attr("href")
				result.push({
					title: title,
					link: link
				})
			})
			console.log(result)
			res.render('index', {articles: result})
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

	app.post('/article', (req, res) => {
		Article.create(req.body, function(err, article) {
			if(err) {
				res.send('error')
			} else {
				console.log('saved article')
				res.json(article)
			}
		})
	})
}