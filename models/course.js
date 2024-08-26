const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    tittle:{
        type:String,
    },
    courseManager:{
        type:String,
    },
    managerMail:{
        type:String,
    },
    courseDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'courseDetails'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }

});

const Course = mongoose.model('Course',courseSchema);
module.exports= Course;