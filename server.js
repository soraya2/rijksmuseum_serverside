var express =  require('express');
var path = require('path');
var hbs = require('express-handlebars');
var app = express();
var bodyParser = require('body-parser');
var home = require('./routers/home');
var details = require('./routers/details');

app.use(bodyParser.urlencoded({ extended: true }));


app.engine('hbs', hbs({extname:'hbs', defaultLayout: 'main', layoutDir: __dirname + 'views/layout'}));
app.set('view engine', 'hbs');


app.use(express.static('public'));


app.set('views',  path.join(__dirname, 'views'));


app.use(function(req, res, next){
  next();
});


app.get('/', function(req, res){
  res.redirect(302,'/home');
});


app.use('/home', home);
app.use('/details', details);
app.use('/search', home);


app.listen(3000, function(){
  console.log('App listening at port: 3000');
});
