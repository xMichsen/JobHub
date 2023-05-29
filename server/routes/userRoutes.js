const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');

router.post("/", 
    body('FirstName').notEmpty().withMessage('First name is required'),
    body('LastName').notEmpty().withMessage('Last name is required'),
    body('Email').isEmail().withMessage('Valid email is required'),
    body('Password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    body('Role').notEmpty().withMessage('Role is required'),
    userController.createUser
);

router.get("/", userController.getAllUsers);

router.post("/login",
  body('Email').notEmpty().withMessage('Email is required'),
  body('Password').notEmpty().withMessage('Password is required'),
  userController.loginUser
);

module.exports = router;
