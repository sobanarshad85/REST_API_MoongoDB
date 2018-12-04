const mongoos = require('mongoose');
require('dotenv').config();
const mongoDBErrors = require('mongoose-mongodb-errors')

//Developed by Soban Arshad
//sobanarshad85@gmail.com
//+92 303 4645 060
//https://www.facebook.com/sobanarshad85
//https://www.twitter.com/sobanarshad85
//https://www.github.com/sobanarshad85
//https://www.linkedin.com/in/sobanarshad85

mongoos.Promise = global.Promise;
mongoose.plugin(mongoDBErrors);
mongoos.connect(process.env.MONGOURI);
