require("dotenv").config();

const express = require("express");
const cors = require("cors");

const Book = require("./books/model");
const bookRouter = require("./books/routes");

const Author = require("./authors/model");
const authorRouter = require("./authors/routes");

const Genre = require("./genres/model");
const genreRouter = require("./genres/routes");

const port = 5001;

const app = express();
app.use(cors())
app.use(express.json());

const syncTables = () => {
    Genre.hasMany(Book)
    Author.hasMany(Book)
    Book.belongsTo(Author)
    Book.belongsTo(Genre)

    Book.sync({ alter: true })
    Author.sync({ alter: true })
    Genre.sync({ alter: true })
};

app.use(bookRouter);
app.use(authorRouter);
app.use(genreRouter);

app.get("/health", (req, res) => {
    res.status(200).json({message: "API is working"});
})

app.listen(port, ()=> {
    syncTables();
    console.log(`Server is running on port ${port}`);
});