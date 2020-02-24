const express = require("express");

// initialize my app
const app = express();

app.get("/", (req, res) => {

    res.send("My first Nodejs connection")
});


// initialize the port
const PORT = process.env. PORT || 4000;

app.listen(PORT, () => {
    console.log(`server is runing at port : ${PORT}`)
});


