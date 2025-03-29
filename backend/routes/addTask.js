const express = require("express");
const db = require("../config/db");
const router = express.Router();

router.post("/", (req, res) => {
    
    const { title, description } = req.body;
    const sql = "INSERT INTO tasks (title, description) VALUES (?, ?)";
    db.query(sql, [title, description], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ id: result.insertId, title, description });
    });
});

module.exports = router;
