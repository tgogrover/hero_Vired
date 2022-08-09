const bcryptjs=require('bcryptjs');
const courseModel=require('../DataModels/course');
const jwt=require('jsonwebtoken');



exports.createCourse=async(req,res)=>{
    try{
    const {Name,Image_Url,University_Name,Faculty_Profile,
        Learning_Hours_And_Duration,Price,Certificate,Eligibility_Criteria}=req.body;
       
     const assumption= await courseModel.findOne(
            {$and:[{Name},{University_Name}]}).exec();
            console.log(assumption)
            if(assumption == null){
                const CreateCourse =  await new courseModel({
                    Name,Image_Url,University_Name,Faculty_Profile,
                    Learning_Hours_And_Duration,Price,Certificate,Eligibility_Criteria
            
            
                }).save()
                  
                   if(CreateCourse){
                    return res.status(201).json({
                        status: "201",
                        success: true,
                        message: "Course Created Successfully =>",
                        data: {CreateCourse},
                      });   
                   }

            }

            return res.status(400).json({
                status: "400",
                success: false,
                message: "Try Another With Different University name or course name =>",
                data: {},
              }); 
   


    
       

}catch(error){
    return res.status(200).json({
        status: "500",
        message: "Internal Server Error",
        success: false,
        data: { error }
    })
}
       
      
};

exports.updateCourse=async(req,res)=>{
    try{
    const {Name,_id,Image_Url,Faculty_Profile,Price}=req.body;
   
        const  courseUpdate=  await  courseModel.findOneAndUpdate(
            {_id},{Name,Image_Url,Faculty_Profile,Price},{new : true}).exec()
      
       if(courseUpdate){
        return res.status(200).json({
            status: "200",
            success: true,
            message: "Course Updated Successfully =>",
            data: {courseUpdate},
          });   
       }
       return res.status(400).json({
        status: "400",
        success: false,
        message: "Course does not exist with this given id  ",
        data: {},
      });
       

}catch(error){
    return res.status(200).json({
        status: "500",
        message: "Internal Server Error",
        success: false,
        data: { error }
    })
}
       
      
};

exports.deleteCourse=async(req,res)=>{
    try{
    const {_id}=req.body;
   
        const  courseDelete=  await  courseModel.findOneAndRemove({_id}).exec()
      
       if(courseDelete){
        return res.status(200).json({
            status: "200",
            success: true,
            message: "Course Deleted Successfully  with given _id=>",
            data: {courseDelete},
          });   
       }

       return res.status(400).json({
        status: "400",
        success: false,
        message: "Course does not exist with this given id ",
        data: {},
      });
       

}catch(error){
    return res.status(200).json({
        status: "500",
        message: "Internal Server Error",
        success: false,
        data: { error }
    })
}
       
      
};

exports.getCourses=async(req,res)=>{
    try{
    const {_id}=req.query;
    
    if(_id == null){
        console.log('ok')
        
        const  courses=  await  courseModel.find({}).exec();
        if(courses.length == 0){
            return res.status(400).json({
                status: "400",
                success: true,
                message: "No  Courses Found in Database =>",
                data: {},
              });  

        }
        return res.status(200).json({
            status: "200",
            success: true,
            message: "Courses Available =>",
            data: {courses},
          });  


   }
   
        const  course=  await  courseModel.findOne({_id}).exec()
      
       if(course == null){
        return res.status(400).json({
            status: "400",
            success: true,
            message: "No Course with this given _id",
            data: {},
          });   
       }
       
       return res.status(200).json({
        status: "200",
        success: true,
        message: " Course with this given _id =>",
        data: {course},
      }); 


}catch(error){
    return res.status(200).json({
        status: "500",
        message: "Internal Server Error",
        success: false,
        data: { error }
    })
}
       
      
};