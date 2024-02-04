const { Model, DataTypes } = require('sequelize'); // retrieve methods from sequelize
const sequelize = require('../config/connections'); //
const Role = require('./Roles')
class Employee extends Model{}

Employee.init(
    {  
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                allowNull: false
            }
          },  
        first_name: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false
            }
        },
        last_name: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false
            }
        },
        
        role_id: {
            type: DataTypes.INTEGER,
            references: {
              model: Role, // Reference to the Department model
              key: 'id', // The primary key in the Department model
              onDelete: 'CASCADE',
            },
        },
    },
    {
        sequelize,
        modelName: 'employee'
    }
);

module.exports =Employee