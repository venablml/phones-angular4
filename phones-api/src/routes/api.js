const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const phoneService = require('../services/phoneService')

router.get('/phones', function(req, res) {
  phoneService
    .getAll()
    .then(phones => {
      res.send(phones)
    })
    .catch(err => {
      res.err('Error retreiving phones')
    })
})

module.exports = router
