"use strict";

const { Sequelize } = require("sequelize");

// Sequelize to database using environment variable credentials
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.USER_PASSWORD,
//   {
//     host: process.env.USER_HOST,
//     dialect: "mysql",
//     dialectOptions: {
//       connectTimeout: 60000,
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//     logging: console.log,
//     pool: {
//       max: 10,
//       min: 0,
//       acquire: 60000,
//       idle: 10000,
//     },
//   }
// );

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.USER_PASSWORD,

  host: process.env.USER_HOST,
  port: process.env.USER_PORT,
  dialect: "mysql",

  ssl: {
    require: true,
    rejectUnauthorized: false,
  },

  logging: console.log,
  pool: {
    max: 10,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
});

// Function to connect to MySQL database
const connectMysql = async () => {
  try {
    // Authenticate to database
    await sequelize.authenticate();
    console.log(`Successful connection to MySQL Database
${process.env.DB_NAME}`);
  } catch (error) {
    console.error("Unable to connect to MySQL database:", error);
    process.exit(1);
  }
};
connectMysql();
module.exports = {
  Sequelize: sequelize,
};
