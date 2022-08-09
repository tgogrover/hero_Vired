const bcryptjs=require('bcryptjs');
const signupModel=require('../DataModels/signupModel');
const jwt=require('jsonwebtoken');

//making scratch folder and storing some information(work like cache) in it 
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

exports.login=async(req,res)=>{
    try{
    const {email,password}=req.body;
   
   const loginAccountCheck= await signupModel.findOne(
     {Email:email}).exec();
       console.log(loginAccountCheck)
      
       if(loginAccountCheck){
           const {Password,_id,Email,Name,Mobile_Number}=loginAccountCheck;
           if(bcryptjs.compareSync(password, Password)){
            var token = jwt.sign({_id:_id,Email:Email}, process.env.SECRET_KEY);
            localStorage.setItem("loginEmail",Email);
            localStorage.setItem('loginToken',token);
            return res.status(200).json({
                status: "200",
                success: true,
                message: "Login  Successfully with credential =>",
                data: {_id,Email,Name,Mobile_Number},
              });
    }
   
        return res.status(404).json({
            status: "404",
            success: false,
            message: "password incorrect,please try correct password",
            data: {},
          });
    
       }
       
        return res.status(400).json({
            status: "400",
            success: true,
            message: "Try signup first ",
            data: {},
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
       
      
};



exports.logout=(req,res)=>{
    localStorage.removeItem('loginEmail');
    localStorage.removeItem('loginToken');
    
       
        return res.status(200).json({
            status: "200",
            message: "Logout Successfully",
            success: false,
            data: {}
        })
    

}