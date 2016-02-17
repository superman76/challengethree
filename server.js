var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animals');

var Bear = require('./models/bear');

var bearRouter = require('./routes/bears')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.set('view engine', 'ejs');

var port = process.env.PORT || 8080;

app.get('/', function(req, res){
    Bear.find(function(err, bears){
      if(err){
        console.log(err)
      } else {
        res.render('index', {title: 'hello world!', bears: bears})
      }
    })
});

app.use('/api', bearRouter);

app.listen(port, function(){
  console.log("app listening on port " + port)
});