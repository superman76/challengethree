var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/challangeTwo');

var Product = require('./models/product');

var productRouter = require('./routes/products');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('public'));


app.set('view engine', 'ejs');

var port = process.env.PORT || 8080;

app.get('/', function(req, res){
  Product.find(function(err, products){
    if(err){
      next (err)
    } else {
      res.render('index', { products: products })
    }
  })
});


app.use('/api', productRouter);

app.listen(port, function(){
  console.log('app listening on ' + port);
});