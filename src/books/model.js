const { DataTypes } = require("sequelize");

const connection = require("../db/connection");


const Book = connection.define("Book", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    author: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    },
    AuthorId : {
        type: DataTypes.INTEGER
    },
    GenreId : {
        type: DataTypes.INTEGER
    }
});

module.exports = Book;