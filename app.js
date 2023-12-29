/**
|--------------------------------------------------|
|       import Packages                            |
|--------------------------------------------------|
*/

const express = require('express') 
const app = express(); 
const bcrypt = require('bcryptjs')
const bodyParser=require('body-parser')
const colors = require('colors')
const dotenv = require('dotenv')
const {body, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')


/**
|--------------------------------------------------|
|         DOTENV configeration and use             |
|--------------------------------------------------|
*/

dotenv.config();
mongoose.connect(process.env.DBUri);
const PORT = process.env.PORT;

/**
|--------------------------------------------------|
|                                                  |
|--------------------------------------------------|
*/

app.use(express.json());
app.use(bodyParser.json()); 


app.use('/',require('./routers/user'));


app.listen(PORT,()=>{
  console.log(`server running on http://localhost:${PORT}`.rainbow.bold);
  
});