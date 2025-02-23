const express = require('express')
const app = express()

const port = 8080

app.get("/", (req, res) => {
    res.send("Hello Server!")
})

app.listen(port, (err) => {
    if (err === undefined)
        console.log("Server connected to port " + port)
    else
        console.error("Server failed to connect to port " + port)
})