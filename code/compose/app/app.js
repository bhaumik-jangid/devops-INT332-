const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
    host: "db",
    user: "root",
    password: "root",
    database : "db-1"
})

connection.connect((err) => {
    if(err) {
        console.log("connection failed due to " + err);
    } else {
        console.log("Conneted to MySQL database");
    }
})

app.get('/', (req, res) => {
    res.send("Hello from docker compose and mysql database!")
});

app.listen(3000, () => {
    console.log("Server is running at post 3000");
})