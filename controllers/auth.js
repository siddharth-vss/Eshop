const User = require("../models/users");
const { body, validationResult } = require("express-validator");
const { log, log2 } = require("../middlewares/midauth");

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password, mobile, pic } = req.body;
  const user = await User.findOne({ email });
  try {
    if (user) {
      return res.status(400).send("Please Use Different Credintials");
    }
    if (!user) {
      const Data = await User.create({
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        isAdmin: false,
        pic: pic
          ? pic
          : "https://res.cloudinary.com/dabh5hsuk/image/upload/v1698927011/fvjydafhxp8jwfaxpqwy.webp",
      });
      res.status(200).json(Data);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
const login = async (req, res) => {
  let { text, password } = req.body;
  let user;

  if (text.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    log;
    user = await User.findOne({ email: text });
  } else {
    text = Number.parseInt(text);
    log2;
    user = await User.findOne({ mobile: text });
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //  res.send("hello");
  // console.log(email || mobile);

  try {
    if (user && user.password === password) {
      res.status(200).json(user);
    }
    if (!user) {
      return res.status(400).send("Please Use Different Credintials");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  console.log("dvs");
  console.log(req.body);
  res.send("sadasd");
};
const admin = async (req, res) => {
  //  console.log(req.body);
  //  const { email  } = req.body ;
  //  const id = await User.findOne({email})._id;

  //  let report = await User.findOneAndUpdate({_id : id },{$set: {
  //     isAdmin : true ,
  //     ugdate:  new Date(),
  //   }});
  //   res.json(id);
  
  const { email } = req.body;
  console.log(req.body);
  //  if(!email || !location || !name || !age){
  //      res.status(400).send("Please provide all values");
  //  }

  const data = await User.findOne({ email});
  console.log(data);
  let id = data._id;
  if (data) {
    //  console.log(user);
    let rep = await User.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          isAdmin: true,
          ugdate: new Date(),
        },
      }
    );
     res.send("Updated Succes fully");
  }
};

const states = async (req, res) => {};

module.exports = { login, register, update, states, admin };