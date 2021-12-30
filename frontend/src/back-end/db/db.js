const Sequelize = require("sequelize");

const sequelize = new Sequelize('college', 'kelson12', 'kelson1212', {
    host: "localhost",
    dialect: "mssql"
})

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}