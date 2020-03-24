var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(express.json())
// create application/json parser
// var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/login', function (req, res) {
  res.send('welcome, ' + req.body.username)
})

require('./routes/dialogflowroutes')(app)

app.listen(process.env.PORT || 5000)
