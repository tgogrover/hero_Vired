const express=require('express');
const router=express.Router();
const {createCourse,updateCourse,deleteCourse,getCourses}=require('../controllers/course');
const {craeteCourseValidation,Validator,updateCourseValidation,deleteCourseValidation}=require('../validators/validations')
const {authentication}=require('../authMiddleware/authentication')

router.post('/api/createCourse',authentication,craeteCourseValidation,Validator,createCourse)
router.post('/api/updateCourse',authentication,updateCourseValidation,Validator,updateCourse)
router.post('/api/deleteCourse',authentication,deleteCourseValidation,Validator,deleteCourse)
router.get('/api/getCourses',authentication,getCourses)


module.exports=router