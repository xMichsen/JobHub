const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const userAuth = require('../middleware/userAuth');

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

router.post("/register", 
    body('FirstName').notEmpty().withMessage('First name is required'),
    body('LastName').notEmpty().withMessage('Last name is required'),
    body('Email').isEmail().withMessage('Valid email is required'),
    body('Password').matches(passwordRegex).withMessage('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
    body('Role').notEmpty().withMessage('Role is required'),
    userController.createUser
);


router.post("/login",
  body('Email').notEmpty().withMessage('Email is required'),
  body('Password').notEmpty().withMessage('Password is required'),
  userController.loginUser
);

router.get("/me", userAuth, userController.getUserInfo);

module.exports = router;
