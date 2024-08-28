//const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const hashValidator = require('../counter/hashing');
//const { model } = require('mongoose');
require('dotenv').config;

const loginUser = async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            res.status(404).json({message:'User not found please Register!'});
            console.log("Please register with the entered email");
        }
        const isMatch = await hashValidator(password,user.password);
        if(!isMatch){
            res.status(500).json({message:"Invalid Password"});
        }

        const token = jwt.sign(
            {
                id:user._id,
                email:user.email,
                role:user.role
            },
            process.env.JWT_SECRET,
            {expiresIn:'30'}
        );

        res.status(200).json({message:"Successfully Loged In"});
    } catch (error) {
        res.status(500).json({message:"Can't login with the user name and mail!"});
        console.error("error");
    }
}

module.exports = loginUser;