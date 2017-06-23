var express = require('express')
var app = express()
var http = require('http').Server(app);

//var users = require('user');
 var bodyParser = require('body-parser')
//var url = require('url');
//var url_parts = url.parse(request.url, true);
//var query = url_parts.query;
// app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html')
});

app.post('/show', function(req, res){
    console.log('weight is:'+req.body.weights +'height is :'+ req.body.heights)
    var bmi =  (req.body.weights)/Math.pow((req.body.heights/100),2)
    console.log('Your BMI is : '+bmi)
  //  res.writeHead(200, { 'Content-Type': 'application/json' });         
    res.json({ bmi: bmi })
})



http.listen(3000, function(){
  console.log('listening on *:3000');
});





