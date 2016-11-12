var express = require('express')
var app = express()

app.use('/', express.static('.'))

var PORT = 3000
app.listen(PORT, function () {
  console.log('Your app is awaiting at http://localhost:' + PORT)
})
