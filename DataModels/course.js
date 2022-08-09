const mongoose=require('mongoose');
const schema = mongoose.Schema
//defining the schema
var CourseSchema=new schema({
    Name:{
        type:String,
        required:true,
    },
    Image_Url:{
        type:String,
        required:true,
        minlength:6
    },
    University_Name:{
        type:String,
        required:true,
        minlength:6
    },
    Faculty_Profile:{
        type:String,
        required:true,
    },
    Learning_Hours_And_Duration:{
        type:String,
       required:true,
    },
    Price:{
        type:Number,
       required:true,
    },
    Certificate:{
        type:String,
       required:true,
    },
    Eligibility_Criteria:{
        type:String,
       required:true,
    },
    date:{
        type:Date,
        default:Date
    }
});


//exporting course model
module.exports=mongoose.model('Course',CourseSchema)