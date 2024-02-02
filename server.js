require('dotenv').config()
const sequelize = require('./config/connections');
const {seedDepartment} = require('./routes/api/departmentRoutes')
const {seedRoles} = require('./routes/api/rolesRoutes')




const seedFiles = async()=> {
    await sequelize.sync({ force:true})
    await seedDepartment()
    await seedRoles()

}
seedFiles()