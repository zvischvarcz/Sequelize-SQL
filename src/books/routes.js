const { Router } = require("express");

const bookRouter = Router();

const { addBook, getAllBooks, updateBook, deleteBook, getByAuthor, getByTitle, getByURLTitle } = require("./controllers");

bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.delete("/books/deleteBook", deleteBook);
bookRouter.put("/books/updateBook", updateBook);
bookRouter.get("/books/getByAuthor", getByAuthor);
bookRouter.get("/books/getByTitle", getByTitle);
bookRouter.get("/books/getBook/:title", getByURLTitle);

module.exports = bookRouter;