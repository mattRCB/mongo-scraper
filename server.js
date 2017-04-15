var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')
var logger = require('morgan')
var mongoose = require('mongoose')

var app = express()
var port = process.env.PORT || 8080

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/newscrape_db')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log(`Mongoose connected to database.`)
});

app.use(logger("dev"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));

// setup express-hanblebars
app.engine('hbs', exphbs({ extname: 'hbs'}))
app.set('view engine', 'hbs')


require('./routes/routes')(app)

















app.listen(port, function() {
	console.log("News-crape App serving on PORT: " + port)
})