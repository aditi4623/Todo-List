const util = require("util");
const mysql = require("mysql");

let pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "todo",
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