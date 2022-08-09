const  {body,validationResult}=require('express-validator');

//wrong validation signup messages

exports.signupValidation=[
    body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 character long')
    .isString()
    .withMessage('Password must be string'),
    body('contacts')
    .notEmpty()
    .withMessage(' contacts  is required')
    .isLength({ min: 10,max:10})
    .withMessage('Contacts must be valid indian mobile number'),
    body('email')
    .notEmpty()
    .withMessage(' email  is required'),
    body('name')
    .notEmpty()
    .withMessage(' name  is required') 
];


//validation messages (occur only if there is wrong validation)
exports.craeteCourseValidation=[
    body('Name')
    .notEmpty()
    .withMessage('Name is required'),
    body('Image_Url')
    .notEmpty()
    .withMessage('Image_Url  is required'),
    body('University_Name')
    .notEmpty()
    .withMessage('University_Name is required'),
    body('Faculty_Profile')
    .notEmpty()
    .withMessage('Faculty Profile is required'),
    body('Learning_Hours_And_Duration')
    .notEmpty()
    .withMessage('Learning Hours and Duration is required'),
    body('Price')
    .notEmpty()
    .withMessage('Price is required'),
    body('Eligibility_Criteria')
    .notEmpty()
    .withMessage('Eligibility Criteria is required'),
];

exports.updateCourseValidation=[
    body('_id')
    .notEmpty()
    .withMessage('_id is required'),
    body('Name')
    .notEmpty()
    .withMessage('Name is required'),
    body('Image_Url')
    .notEmpty()
    .withMessage('Image_Url  is required'),
    body('Faculty_Profile')
    .notEmpty()
    .withMessage('Faculty Profile is required'),
    body('Price')
    .notEmpty()
    .withMessage('Price is required'),
];

exports.deleteCourseValidation=[
    body('_id')
    .notEmpty()
    .withMessage('_id is required'),
];

//,,,,
      //  ,,
  //    Name,_id,Image_Url,Faculty_Profile,Price,Certificate
   exports.loginValidation=[
        body('email')
        .notEmpty()
        .withMessage('Valid Email is required'),
        body('password')
        .notEmpty()
        .withMessage('Password is required')
    ];

//giving validation messages as response if there is wrong validation
exports.Validator=  (req,res,next)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
        status: "422",
        message: errors.array()[0].msg,
        success: false,
        data: {},
    });
}
next();
}