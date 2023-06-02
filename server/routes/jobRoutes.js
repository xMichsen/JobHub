const express = require('express');
const router = express.Router();
const jobContreoller = require('../controllers/jobController');

router.get("/allJobs", jobContreoller.getAllJobs);

module.exports = router;