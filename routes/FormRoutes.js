const FormControl = require('../controllers/FormControl')
const express = require('express')
const Router = express.Router()

Router.get('/', FormControl.getForm)


Router.post('/send', FormControl.postForm)

Router.post('/delete/:taskId', FormControl.deleteFormItem)
module.exports = Router