const Book = require("./model");
const Author = require("../authors/model");
const Genre = require("../genres/model");

const addBook = async (req, res) => {
    try {
        const author = await Author.findOne({
            where: {
                authorName: req.body.author
            }
        });
        const genre = await Genre.findOne({
            where: {
                genreName: req.body.genre
            }
        });
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            AuthorId: author.id,
            GenreId: genre.id
        });

        
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
        const updatedBook = await Book.update({[req.body.key]: req.body.value}, {
            where: {
                 title: req.body.title
            }
        });
        if(req.body.key === "genre"){
            const genre = await Genre.findOne({
                where: {
                    genreName: req.body.value
                }
            });
            await Book.update({GenreId: genre.id}, {
                where: {
                     title: req.body.title
                }
            })
        } else if(req.body.key === "author"){
            const author = await Author.findOne({
                where: {
                    authorName: req.body.value
                }
            });
            await Book.update({AuthorId: author.id}, {
                where: {
                     title: req.body.title
                }
            })
        }
        
        res.status(200).json({ message: "success", changed: updatedBook });
    } catch(error) {
        res.status(500).json({ message: error.message, error: error});
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

const deleteAllBooks = async (req, res) => {
    try {
        const deletedBooks = await Book.destroy({
            truncate: true
        });
        res.status(200).json({ message: "success", amountDeleted: deletedBooks });
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
                title: req.params["title"]
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
    getByURLTitle,
    deleteAllBooks
}