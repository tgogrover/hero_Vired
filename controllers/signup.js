const bcryptjs=require('bcryptjs');
const signupModel=require('../DataModels/signupModel')

exports.signup=async(req,res)=>{
    try{
        const {email,contacts,password,name}=req.body
   const uniqueEmail_Contacts= await signupModel.findOne(
       {$or:[{Email:email},{Mobile_Number:contacts}]}).exec();
      // console.log(uniqueEmail_Contacts)
     
       if(uniqueEmail_Contacts==null){
           console.log(req.body)
         var hashPasword=  bcryptjs.hashSync(password,10);
       //  console.log(hashPasword)
        
            const legalSignup= await new signupModel({
                Name:name,
                Email:email,
                Mobile_Number:contacts,
                Password:hashPasword,
            }).save()
      
         
            return res.status(201).json({
                status: "201",
                message: "Success",
                success: true,
                data:  {legalSignup} ,
            });
           // return  console.log(legalSignup)
         
       }
      
       return res.status(400).json({
        status: "400",
        message: "Try with different Email id or Phone Number",
        success: false,
        data:  {} ,
    });
       
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status: "500",
            message: "Internal Server Error",
            success: false,
            data: { error }
        })
    }
    
}