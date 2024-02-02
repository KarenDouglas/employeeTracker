require('dotenv').config()
const sequelize = require('./config/connections');




sequelize.sync({ force: true })