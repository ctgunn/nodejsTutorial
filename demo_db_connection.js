var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "nodejs_admin",
    password: "Password123"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});