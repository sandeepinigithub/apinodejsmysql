const mysql = require('mysql2');
const userQuery = require('../models/user.model');
const dbConfig = require('../config/db.config');

const db = mysql.createConnection(dbConfig);
db.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});

module.exports.getAllUser = (req, res) => {
    console.log("Requested at :",req.requestTime)
    db.query(userQuery.getAllUser(), (err, result) => {
        if (err) throw err;
        // console.log("Result: " + JSON.stringify(result));
        res.send(result);
    });
}