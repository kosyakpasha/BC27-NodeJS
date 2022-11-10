const router = require("express").Router();

const books = require("../../data/books");

router.get("/", (req, res) => {
    res.json(books);
});

module.exports = router;