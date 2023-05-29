const pool = require("../db");
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.createUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { FirstName, LastName, Email, Password, Role } = req.body;
        const newUser = await pool.query(
            "INSERT INTO Users (FirstName, LastName, Email, Password, Role) VALUES($1, $2, $3, crypt($4, gen_salt('bf')), $5) RETURNING *",
            [FirstName, LastName, Email, Password, Role]
        );

        res.json(newUser.rows[0]);
    } 
    catch (err) {
        console.error(err.message);
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM Users");
        res.json(allUsers.rows);
    } 
    catch (err) {
        console.error(err.message);
    }
};

exports.loginUser = async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const user = await pool.query("SELECT * FROM Users WHERE Email = $1", [Email]);
        if (user.rows.length === 0) {
            return res.status(401).json("Niepoprawny email lub hasło");
        }
        const validPassword = await pool.query(
            "SELECT (Password = crypt($1, Password)) AS Matches FROM Users WHERE Email = $2",
            [Password, Email]
        );
        if (!validPassword.rows[0].matches) {
            return res.status(401).json("Niepoprawny email lub hasło");
        }

        // Create a JWT token
        const token = jwt.sign(
            { userId: user.rows[0].userid }, // payload
            'secret_key', // Very hidden xd
            { expiresIn: '1h' } // When the token expires
        );

        // Return the token
        res.json({ token });
    } 
    catch (err) {
        console.error(err.message);
    }
};
