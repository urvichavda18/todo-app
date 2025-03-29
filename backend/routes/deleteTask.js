const express = require("express");
const db = require("../config/db");
const router = express.Router();

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM tasks WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Task deleted successfully" });
    });
});

module.exports = router;
