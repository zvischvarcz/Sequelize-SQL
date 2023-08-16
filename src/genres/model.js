const { DataTypes } = require("sequelize");
const connection = require("../db/connection");


const Genre = connection.define("Genre", {
    genreName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Genre;