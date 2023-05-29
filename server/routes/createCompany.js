const express = require('express');
const router = express.Router();
const pool = require("../db");
const { body, validationResult } = require('express-validator');

router.post("/", 
    body('Name').notEmpty().withMessage('Name is required'),
    body('Description').notEmpty().withMessage('Description is required'),
    body('Location').notEmpty().withMessage('Location is required'),
    body('Industry').notEmpty().withMessage('Industry is required'),
    async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { Name, Description, Location, Industry } = req.body;
        const newCompany = await pool.query("INSERT INTO Companies (Name, Description, Location, Industry) VALUES($1, $2, $3, $4) RETURNING *",
        [Name, Description, Location, Industry]);

        res.json(newCompany.rows[0]);
    } 
    catch (err) {
        console.error(err.message);
    }
});

module.exports = router;
