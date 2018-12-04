const mongoos = require('mongoose');
require('dotenv').config();
const mongoDBErrors = require('mongoose-mongodb-errors')

mongoos.Promise = global.Promise;
mongoose.plugin(mongoDBErrors);
mongoos.connect(process.env.MONGOURI);
