let mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.DBUri);


let paisa = mongoose.Schema({
    Item: {
        type: String,
        required: true
    },
    Price:{
       type:Number,
       required: true
    }
})

let stocks = mongoose.model('Stocks',paisa);

module.exports = stocks;