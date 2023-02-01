const Sequelize = require("sequelize");
// const { db, db_user, db_pass, db_port } = require('config.json');

// const sequelize = new Sequelize(
//   // db,
//   // db_user,
//   // db_pass,
//   process.env.DB,
//   process.env.DB_USERNAME,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     port: process.env.MYSQL_LOCAL_PORT,
//     dialect: "mariadb",
//   }
// );

// const sequelize = new Sequelize('postgres://root:pass@example.com:5432/dbname') // Example for postgres

const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite

module.exports = sequelize;