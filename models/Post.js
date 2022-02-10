const mongoose = require('mongoose');
const Scheme = mongoose.Schema;


//tao modal

const postSchema = new Scheme({
    title : {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    }

})

module.exports = mongoose.model('post', postSchema)
