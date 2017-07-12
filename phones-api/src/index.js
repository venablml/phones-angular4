const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./routes/api')

//enable cors to facilitate local testing during early dev.
app.use(cors())

app.get('/', function(req, res) {
  res.send('Phones Api')
})

app.use('/api', apiRouter)
app.listen(3000, function() {
  //console.log('phones-api started up...')
})
