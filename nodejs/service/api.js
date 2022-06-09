const express = require('express');
const app = express.Router();
// const con = require("./db");
// const db = con.db;

app.get("/api/gethello", (req, res) => {
    res.status(200).json({
        data: "hello"
    })
});

module.exports = app;