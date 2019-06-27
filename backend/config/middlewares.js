const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

module.exports = app => {
    app.use(cors())
    app.use(express.static('images/users/resized'))
    app.use(express.static('images/animals/resized'))
    app.use(bodyParser.json({ limit: '50mb' }))
    app.use(bodyParser.urlencoded({ extended: true })) 
    
}