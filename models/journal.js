
let mongoose = require('mongoose');

const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.DBUri);


let journal = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Textarea: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

let Entry = mongoose.model('journals',journal);

module.exports = Entry;