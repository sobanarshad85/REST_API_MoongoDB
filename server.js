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

//Developed by Soban Arshad
//sobanarshad85@gmail.com
//+92 303 4645 060
//https://www.facebook.com/sobanarshad85
//https://www.twitter.com/sobanarshad85
//https://www.github.com/sobanarshad85
//https://www.linkedin.com/in/sobanarshad85

//middleware
app.use(bodyParser.json()).use(morgan())

//routes
app.use('/posts', require('./routes/posts'))

app.listen(6666, () => {
    console.log('server is listening at: 6666')
})