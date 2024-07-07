"use strict";
const { Sequelize } = require("sequelize");

// Sequelize to database using environment variable credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

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
