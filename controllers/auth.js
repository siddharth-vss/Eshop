const User = require("../models/users");
const {body,validationResult} =require("express-validator");



const register = async(req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        res.send(req.body);
    } catch (error) {
        
    }
}
const login = async(req,res) => {
 
}

const update = async(req,res) => {
     
}
const states = async(req,res) => {
     
}



module.exports = { login,register,update,states };