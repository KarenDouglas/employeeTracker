const Sequelize = require('sequelize'); //imports sequelize library
require('dotenv').config();

let sequelize;// declares var

  
if (process.env.JAWSDB_URL) {
    // options for deploying to heroku
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    //connect mysql database
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
// checks if sequelize is connected
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = sequelize;