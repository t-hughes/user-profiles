//REQUIRED DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var port = 2000;



//REQUIRED FILES
var config = require('./config');
var users = require('./controllers/userCtrl');
var profiles = require('./controllers/profileCtrl');

var app = express();


//Configuring CORS to whitelist only a specific origin
var corsOptions = {
    origin: 'http://localhost:2000'
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));
app.use(express.static(__dirname + './../public'));

//ENDPOINTS
app.post('/api/login', users.login);
app.get('/api/profiles', profiles.getFriends);



app.listen(port, function(){
  console.log("Listeing on port ", port, " Hold Onto Your Underwear");
});
