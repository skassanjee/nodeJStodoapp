const express = require('express')
const Router = express.Router()
const Task = require('../models/TaskModel')
const mongodb = require('mongodb')

Router.postForm = (req, res, next) => {
    const task = new Task({
        todo: req.body.taskItem
    })

    task.save()
        .then(result => res.redirect('/'))
        .catch(err => console.log(err))
}




Router.getForm = (req, res, next) => {
    Task.find()
    .then((tasks) => {
      res.render("Form", {
        tasks: tasks,
      });
    })
    .catch(err => console.log(err))
}

Router.deleteFormItem = (req, res, next) => {
    const taskId = req.params.taskId;
    Task.findByIdAndRemove(taskId)
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  };
module.exports = Router

