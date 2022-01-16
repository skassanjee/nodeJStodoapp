const { Router } = require('express')
const express = require('express')
const Route = express.Router()

Router.getPages = ((req, res) => {
        res.redirect('/');
})

module.exports = Router