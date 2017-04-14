var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var request = require('request')
var cheerio = require('cheerio')
var exphbs = require('express-handlebars')
var logger = require("morgan")

var app = express()
var port = process.env.PORT || 8080

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// setup express-hanblebars
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')


require('./routes/routes')(app)















app.listen(port, function() {
	console.log("News-crape App serving on PORT: " + port)
})