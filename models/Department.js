const { Model, DataTypes } = require('sequelize'); // retrieve methods from sequelize
const sequelize = require('../config/connections'); //

class Department extends Model{}

Department.init(
    {  
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                allowNull: false
            }
          },  
        title: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false
            }
        }
    },
    {
        sequelize,
        modelName: 'department'
    }
);

module.exports = Department