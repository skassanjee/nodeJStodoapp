const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongodb = require('mongodb')

const bodyparser = require('body-parser')
app.use(bodyparser())
require('dotenv').config()

const path = require("path");

const FormRoutes = require('./routes/FormRoutes')

app.use(FormRoutes)
app.use(
    express.urlencoded({ extended: true })
);
    
app.use(express.json());

//templating engine

app.set("view engine", "ejs");
app.set("views", "views");

const db = process.env.db

mongoose.connect(db)
.then( result => console.log('Connected to DB!'))
.catch(err => console.log(err))

app.use(express.static(path.join(__dirname, "public")));
// 


const port = process.env.port || 3000
app.listen(port)