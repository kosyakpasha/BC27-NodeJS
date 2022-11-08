const express = require("express");

const books = require("./books");

const app = express();

app.set("json space", 8);

app.get("/api/books", (req, res) => {
    // res.send(books);
    // res.send(null);
    res.json(null);
    // res.json(books);
});

app.post("/books", (req, res) => {
    res.json({
        title: "Title",
        name: "Name",
        id: "534654"
    });
});

app.listen(3000, () => console.log("Server running..."));