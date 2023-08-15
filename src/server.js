require("dotenv").config();

const express = require("express");
const Book = require("./books/model");
const bookRouter = require("./books/routes");
const port = 5001;

const app = express();

app.use(express.json());

const syncTables = () => {
    Book.sync({ alter: true })
};

app.use(bookRouter);

app.get("/health", (req, res) => {
    res.status(200).json({message: "API is working"});
})

app.listen(port, ()=> {
    syncTables();
    console.log(`Server is running on port ${port}`);
});