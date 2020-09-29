const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database: 'zwallet_db'
})

conn.connect()

module.exports = conn