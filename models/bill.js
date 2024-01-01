let mongoose = require('mongoose');

const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.DBUri);


let bill = mongoose.Schema({
    Item: {
        type: Array,
        required: true
    },
    quantity: {
        type: Array,
        required: true
    },
    Price: {
        type: Array,
        required: true
    },
    Total: {
        type: Number,
        required: true
    },
    
},{
    timestamps:true  
})

let invoice = mongoose.model('invoice',bill);

module.exports = invoice;