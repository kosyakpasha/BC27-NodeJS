const express = require("express");

const app = express();

app.get("/", (reqest, response) => {
    response.send("<h2>Home page</h2>")
});

app.post("/", (reqest, response) => {
    response.json({
        message: "add success"
    });
});

app.get("/contacts", (reqest, response) => {
    response.send("<h2>Contacts page</h2>")
});

app.listen(3000, () => console.log("Server running..."));