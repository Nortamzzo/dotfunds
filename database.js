const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const conn = mysql.createPool({
    host: process.env.dbHost,
    port: process.env.dbPort,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    database: process.env.dbDatabase,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    insecureAuth: true
});

module.exports = conn;