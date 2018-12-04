const mongoos = require('mongoose')
const comment_schema = new mongoos.Schema({
    content: {
        type: String,
        require: "Content is Required"
    },
    post: {
        type: mongoos.Schema.Types.ObjectId,
        ref: 'Post',
        required: 'Post is Required Field'
    }
});

module.exports = mongoos.model('Comment', comment_schema)