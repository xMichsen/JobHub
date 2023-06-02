const pool = require("../db");

exports.getAllJobs = async (req, res) => {
    try {
        const allJobs = await pool.query("SELECT Jobs.JobID, Jobs.Title, Jobs.Description, Jobs.SkillsRequired, Jobs.Location, Jobs.Salary, Companies.Name AS CompanyName, Companies.Image AS CompanyImage, Users.FirstName AS RecruiterFirstName, Users.LastName AS RecruiterLastName, Users.Email AS RecruiterEmail FROM Jobs INNER JOIN Companies ON Jobs.CompanyID = Companies.CompanyID INNER JOIN Users ON Jobs.RecruiterID = Users.UserID;");
        res.json(allJobs.rows);
    } 
    catch (err) {
        console.error(err.message);
    }
}