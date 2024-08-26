const mongoose = require('mongoose');
const Assignment = require('./assignment');
const progressSchema = new mongoose.Schema({
    progresses:[
        {
            progress:{
                type:Boolean
            }
        }
    ],
    assignment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'assignment'
    }
});

const Progress= mongoose.model('Progress',progressSchema);
module.exports= Progress;