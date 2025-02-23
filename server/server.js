const express = require('express')
const app = express()

//Middleware? JSON? CORS?

//Setup Sqlite DB
const sqlite3 = require('sqlite3').verbose() //verbose gives extra err details
const db = new sqlite3.Database('./tasks.db', (err) => {
    if (err) console.error('DB Error: ', err);
    else console.log('SQLite connected');
})

db.run(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT, 
    isComplete INTEGER DEFAULT 0,
    dueDate TEXT
)`)

//Setup Webserver
const port = 8080

app.get("/", (req, res) => {
    res.send("Hello Server!")
})

app.listen(port, (err) => {
    if (!err) console.log("Server connected to port " + port)
    else console.error("Server failed to connect to port " + port)
})