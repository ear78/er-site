var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 5050;

var app = express();



app.use(express.static("./public"));
app.set('port', (process.env.PORT || 5050));

app.use(cors());
app.use(bodyParser.json());

// app.use(express.static("./public"));




app.listen(port, function(){
    console.log('port is on', port);
})
