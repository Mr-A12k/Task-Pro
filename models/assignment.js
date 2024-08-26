const mongoose = require('mongoose');
const CourseDetails = require('./courseDetails');
const assignmentSchema = new mongoose.Schema({
   tasks:[
    {
      task:  {
    type:String,
   },
} 
],

    link:{
        type:String,
    },
    coursedetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'courseDetails'
    },
    completed:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    }]
});


const Assignment = mongoose.model('Assignment',assignmentSchema);
module.exports=Assignment;