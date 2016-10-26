//REQUIRED DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var port = 2000;



//REQUIRED FILES
var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');

var app = express();


//Configuring CORS to whitelist only a specific origin
var corsOptions = {
    origin: 'http://localhost:2000'
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + './../public'));
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
 }));


//ENDPOINTS
app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);
app.get('/api/currentUserName', profileCtrl.getCurrentUserName);


app.listen(port, function(){
  console.log("Listeing on port ", port, " Hold Onto Your Underwear");
});
