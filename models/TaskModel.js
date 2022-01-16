const mongodb = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskModel = new Schema({
    todo: {
        type: String
        
    }
})

module.exports = mongoose.model('Task', TaskModel);