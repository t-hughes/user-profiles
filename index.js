//REQUIRED DEPENDENCIES
var express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    port = 2000,
    corsOptions = {
        origin: 'http://localhost' + port
    };

//Init express
var app = express();

//Middleware and controllers
var config = require('./config'),
    profileCtrl = require('./controllers/profileCtrl'),
    userCtrl = require('./controllers/userCtrl');

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
 }));
 app.use(express.static(__dirname + '/public'));


//ENDPOINTS
app.get('/api/profiles', profileCtrl.getCurrentUser);
app.post('/api/login', userCtrl.login);



app.listen(port, function(){
  console.log("Listeing on port ", port, " Hold Onto Your Underwear");
});
