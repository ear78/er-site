var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var massive = require('massive');
var port = 5050;

var app = module.exports = express();
// var db = massive.connectSync({
//     db: "er-site"
// });



app.set('port', (process.env.PORT || 5050));

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + "./public"));


// app.get('/', function(request,response){
//     response.sendFile(path.join(__dirname, '../public/index.html');
// })


app.listen(port, function(){
    console.log('port is on', port);
})
