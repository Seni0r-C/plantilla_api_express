const mysql = require('mysql2');

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sellcar',
    port: 3307
});

module.exports = pool.promise();
