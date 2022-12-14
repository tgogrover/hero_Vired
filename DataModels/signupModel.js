const mongoose=require('mongoose');
const schema= mongoose.Schema
//defining the schema
var SignupSchema=new schema({

    Name:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
        minlength:6
    },
    Email:{
        type:String,
        required:true,
       unique:true
    },
    Mobile_Number:{
        type:Number,
       required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    date:{
        type:Date,
        default:Date
    }
});


//exporting sigup model
module.exports=mongoose.model('User',SignupSchema)