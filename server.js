var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var request = require('request')
var cheerio = require('cheerio')
var exphbs = require('express-handlebars')
var logger = require('morgan')
var mongoose = require('mongoose')

var app = express()
var port = process.env.PORT || 8080


// // Database configuration
// var databaseUrl = process.env.MONGODB_URI || "newscrape_db";
// var collections = ["articles"];
// // Hook mongojs config to db variable
// var db = mongojs(databaseUrl , collections);
// // Log any mongojs errors to console
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });




mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/newscrape_db');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`Mongoose connected to database.`)
});

app.use(logger("dev"));
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