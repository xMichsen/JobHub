const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const companyController = require('../controllers/companyController');

router.post("/", 
    body('Name').notEmpty().withMessage('Name is required'),
    body('Description').notEmpty().withMessage('Description is required'),
    body('Location').notEmpty().withMessage('Location is required'),
    body('Industry').notEmpty().withMessage('Industry is required'),
    companyController.createCompany
);

router.get("/", companyController.getAllCompanies);

module.exports = router;
