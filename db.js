const { Sequelize } = require("sequelize");
const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_DATABASE,
} = require("./constants");

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

(async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
