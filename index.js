var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/login', jsonParser, function (req, res) {
    res.send('welcome, ' + req.body.username)
  })

require('./routes/dialogflowroutes')(app);

app.listen(process.env.PORT || 5000);
