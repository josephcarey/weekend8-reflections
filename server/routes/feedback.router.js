const express = require("express");
const router = express.Router();

const pool = require("../modules/pool");

// Create
router.post("/", function(req, res) {
  pool
    .query(
      `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)
    `,
      [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments
      ]
    )
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log("error:", error);
      res.sendStatus(500);
    });
});

// Read
router.get("/", function(req, res) {
  pool
    .query(
      `
    SELECT * FROM "feedback"
    `
    )
    .then(results => {
      res.send(results.rows);
    })
    .catch(error => {
      console.log("error:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
