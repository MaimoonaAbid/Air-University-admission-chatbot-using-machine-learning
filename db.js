const mongoose=require('mongoose');
const url="mongodb://localhost:27017/task";
mongoose.connect(url,{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log("Database Connection Successful");
    }
    else{
        console.log("An Occur Error in database Connection");
    }
})
require('./task.model');