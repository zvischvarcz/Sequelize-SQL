const Book = require("./model")

const addBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(200).json({ message: "success", book: newBook});
    } catch(error) {
        res.status(501).json({ message: error.message, error: error});
        console.log(error);
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll()

        res.status(200).json({ message: "success", books: books});
    } catch(error) {
        res.status(501).json({ message: error.message, error: error});
        console.log(error);
    }
};

const updateBook = async (req, res) => {
    try {
        const updateAuthor = await Book.update({author: req.body.newAuthor, title: req.body.newTitle, genre: req.body.newGenre}, {
            where: {
                 title: req.body.title
            }
        })


        res.status(200).json({ message: "success", changed: updateAuthor });
    } catch(error) {
        res.status(501).json({ message: error.message, error: error});
        console.log(error);
    }
};

const deleteBook = async (req, res) => {
    try {
        const deleteBook = await Book.destroy({
            where: {
                title: req.body.title
            }
        });
        res.status(200).json({ message: "success", amountDeleted: deleteBook });
    } catch(error) {
        res.status(501).json({ message: error.message, error: error});
        console.log(error);
    }
};

const getByAuthor = async (req, res) => {
    try {
        const books = await Book.findAll({
            where: {
                author: req.body.author
            }
        });

        res.status(200).json({ message: "success", books: books});
    } catch(error) {
        res.status(501).json({ message: error.message, error: error});
        console.log(error);
    }
};

const getByTitle = async (req, res) => {
    try {
        const book = await Book.findAll({
            where: {
                title: req.body.title
            }
        });

        res.status(200).json({ message: "success", books: book});
    } catch(error) {
        res.status(501).json({ message: error.message, error: error});
        console.log(error);
    }
};

const getByURLTitle = async (req, res) => {
    try {
        const book = await Book.findAll({
            where: {
                title: req.params.title
            }
        });

        res.status(200).json({ message: "success", books: book});
    } catch(error) {
        res.status(501).json({ message: error.message, error: error});
        console.log(error);
    }
};


module.exports = {
    addBook,
    getAllBooks,
    deleteBook,
    updateBook,
    getByAuthor,
    getByTitle,
    getByURLTitle 
}