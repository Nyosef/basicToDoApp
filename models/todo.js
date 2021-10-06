const { text } = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({

    description: {
        type: String,
        required: true
    },
    done: {
        type : Boolean,
        default: false
    }
});

// using the model we will do a lot. 
// this line is extremly important
// with the model we will rmove the data, add, search .... 
module.exports = mongoose.model('Todo', todoSchema);

