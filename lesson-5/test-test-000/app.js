const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const { DB_HOST } = process.env;

console.log(process.env.DB_HOST);

mongoose.connect(DB_HOST)
    .then(() => console.log("Database connect"))
    .catch((err) => console.log(err.message))