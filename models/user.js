const mongoose = require('mongoose');
const Student = require('./studentDetails');
const CourseDetails = require('./courseDetails')
const Course = require('./course');
const Progress =require('./progress');
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
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'studentDetails'
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'course'
    },
    coursedetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'courseDetails'
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