const express = require("express");
const db = require("../config/db");
const router = express.Router();

router.put("/:id", (req, res) => {
    const { title, description } = req.body;
    const { id } = req.params;
    const sql = "UPDATE tasks SET title = ?, description = ? WHERE id = ?";
    db.query(sql, [title, description, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Task updated successfully" });
    });
});

module.exports = router;
