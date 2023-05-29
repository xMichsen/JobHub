const pool = require("../db");
const { validationResult } = require('express-validator');

exports.createCompany = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { Name, Image, Description, Location, Industry } = req.body;
        const newCompany = await pool.query("INSERT INTO Companies (Name, Image, Description, Location, Industry) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [Name, Image, Description, Location, Industry]);

        res.json(newCompany.rows[0]);
    } 
    catch (err) {
        console.error(err.message);
    }
};

exports.getAllCompanies = async (req, res) => {
    try {
        const allCompanies = await pool.query("SELECT * FROM Companies");
        res.json(allCompanies.rows);
    } 
    catch (err) {
        console.error(err.message);
    }
};
