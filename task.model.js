const mongoose=require('mongoose');

var taskSchema=new mongoose.Schema({


    Question:{
        type:String
    },
    Answer:{
        type:String
    }
})
mongoose.model('Task',taskSchema);

