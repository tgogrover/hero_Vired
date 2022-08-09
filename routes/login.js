const express=require('express');
const router=express.Router();
const {login,logout}=require('../controllers/login');
const {loginValidation,Validator}=require('../validators/validations');


router.post('/api/login',loginValidation,Validator,login)
router.get('/api/logout',logout)


module.exports=router