const { Router } = require("express");

const genreRouter = Router();

const { addGenre, getGenreAndBooks } = require("./controllers");

genreRouter.post("/genres/addGenre", addGenre);
genreRouter.get("/genres/getGenreAndBooks/:genre", getGenreAndBooks);

module.exports = genreRouter;