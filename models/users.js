const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.DBUri);
 

const Uesr = mongoose.Schema({
    name:String,
    email: String,
    password: String,
    mobile:Number,
    isAdmin: Boolean,
    pic:String,
},{timestamps: true });

module.exports = mongoose.model("users" , Uesr); 