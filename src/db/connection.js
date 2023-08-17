const {Sequelize} = require("sequelize");

const connection = new Sequelize(process.env.MYSQL_URI, {

    pool: {
        max: 5,
        min: 0,
        idle: 10000
      }});

console.log("DB is connected");

module.exports = connection;