const mongoose = require('mongoose');
const Student = require('./studentDetails');
const bcrypt=require('bcrypt');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:'student',
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    },
   
});


userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next();
    }
    try {
        const salt =await bcrypt.genSalt(10);
        this.password=await bcrypt.hash(this.password,salt);
        next();
    } catch (error) {
        return next(error);
    }
});

const User = mongoose.model('User',userSchema);
module.exports=User;