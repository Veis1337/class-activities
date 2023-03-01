const Sequelize = require('sequelize');
require('dotenv').config();
console.log(process.env);

const sequelize = new Sequelize(
  process.env.db_name,
  process.env.user,
  process.env.password,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
