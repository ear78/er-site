var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var massive = require('massive');
var config = require('./config.json');
var port = process.env.PORT || 4000;

var app = module.exports = express();
var db = massive.connectSync({
    db: "er-site"
});

app.set('db', db);

app.use(cors());
app.use(bodyParser.json());

app.use(express.static("./public"));



app.listen(port, function(){
    console.log('port is on', port);
})
