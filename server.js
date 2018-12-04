const express = require('express')
require('express-async-errors')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')

//database connection
require('./mongo')

//models
require('./model/post')

//middleware
app.use(bodyParser.json()).use(morgan())

//routes
app.use('/posts', require('./routes/posts'))

app.listen(6666, () => {
    console.log('server is listening at: 6666')
})