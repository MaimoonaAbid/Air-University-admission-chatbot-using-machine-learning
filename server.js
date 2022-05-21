require('./models/db');
const express=require('express');
const path=require('path');

const expressHandlebars=require('express-handlebars');
const taskController=require('./controller/taskController');
const exp = require('constants');
const bodyParser = require('body-parser');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
var app=express();
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs',expressHandlebars({
    
    extname:'hbs',
    defaultLayout:'mainLayout',
    layoutsDir:__dirname+'/views/'
}))
app.set('view engine','hbs');
app.listen(8080,()=>{
    console.log("Server connected on port 8080");
})
app.use('/',taskController);