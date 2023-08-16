const Genre = require("./model");
const Book = require("../books/model");



const addGenre = async (req, res) => {
    try {
        const newGenre = await Genre.create({
            genreName: req.body.genreName
        });
        res.status(201).json({ message: "success", genre: newGenre});
    } catch(error) {
        res.status(501).json({ message: error.message, error: error});
        console.log(error);
    }
};

const getGenreAndBooks = async (req, res) => {
    try {
        const genre = await Genre.findOne({
            where: {
                GenreName: req.params["genre"]
            },
            include: Book
        })
        res.status(201).json({ message: "success", GenreBooks: genre});
    } catch(error) {
        res.status(501).json({ message: error.message, error: error});
        console.log(error);
    }
};


module.exports = {
    addGenre,
    getGenreAndBooks
}