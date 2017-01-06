// var express = require('express');
// var bodyParser = require('body-parser');
// var cors = require('cors');
// var port = 5050;
//
// var app = express();
//
//
//
// app.use(express.static("./public"));
// app.set('port', (process.env.PORT || 5050));
//
// // app.use(cors());
// app.use(bodyParser.json());
//
//
//
//
//
// app.listen(port, function(){
//     console.log('port is on', port);
// })


// var express = require('express');
//
// var port = process.env.PORT || 3000;
// var app = express();
//
// app.use(express.static(__dirname + '/public'));
//
// app.all('*', function(req, res, next) {
//     res.sendFile('/public/index.html', { root: __dirname });
// });
//
// app.listen(port, function(err){
//   console.log('connected at ', port);
// });

var express = require('express')
var port = process.env.PORT || 5050
var app = express()
app
.use(express.static(__dirname + '/public'))
.listen(port, function() { console.log('listening on', port) })
