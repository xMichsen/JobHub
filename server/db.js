const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "haslo",
    host: "localhost",
    port: 5432,
    database: "jobhub"
})

module.exports = pool;