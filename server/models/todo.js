var mongoose = require('mongoose')

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
        //this are mongoose validators...
    },
    completed: {
        type: Boolean,
        default:false
    },
    completedAt: {
        type: Number,
        default:null
    },
    _creator: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    }
});

module.exports = {Todo};