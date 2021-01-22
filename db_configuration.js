const util = require("util");
const mysql = require("mysql");

let pool = mysql.createPool({
    host: "sql347.main-hosting.eu",
    user: "u298279946_aditi",
    password: "QwertyuioP1",
    database: "u298279946_aditi",
});

pool.getConnection((err, connection) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to Database");
    }
    if (connection) connection.release();
    return;
});

pool.query = util.promisify(pool.query);
module.exports = pool;