const User = require("../models/users");
const {body,validationResult} =require("express-validator");



const register = async(req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
     const {name , email , password , mobile , pic } = req.body;
     const user = await User.findOne({email});
    try {
        if(user ){
            return  res.status(400).send('Please Use Different Credintials');
        }
        if(!user){
        const Data = await User.create({
            name:name,
            email: email,
            password: password,
            mobile:mobile,
            pic: pic? pic : "https://res.cloudinary.com/dabh5hsuk/image/upload/v1698927011/fvjydafhxp8jwfaxpqwy.webp",
        })
        res.status(200).json(Data);
    }
    } catch (error) {
         res.status(400).json(error);
    }
}
const login = async(req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { text , password ,mobile } = req.body;

    const user =  await User.findOne({mobile}) || await User.findOne({email});

    try {
        if(user  && user.password === password ){
         res.status(200).json(user);
        }
        if(!user){
            return  res.status(400).send('Please Use Different Credintials');
       
    }
        
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async(req,res) => {
     
}
const states = async(req,res) => {
     
}



module.exports = { login,register,update,states };