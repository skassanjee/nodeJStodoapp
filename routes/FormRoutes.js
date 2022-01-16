const FormControl = require('../controllers/FormControl')
const errorControl = require('../controllers/error')

const express = require('express')
const Router = express.Router()

Router.get('/', FormControl.getForm)


Router.post('/send', FormControl.postForm)

Router.post('/delete/:taskId', FormControl.deleteFormItem)

Router.get('*', errorControl.getPages)

module.exports = Router