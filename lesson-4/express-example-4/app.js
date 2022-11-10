const expess = require("express");
const cors = require("cors");

// const books = require("./data/books");
const booksRouter = require("./routes/api/books");

const app = expess();

app.use(cors());

// app.get('/books', (req, res) => {
//     res.json(books);
// });

app.use("/api/books", booksRouter);

app.listen(3000);