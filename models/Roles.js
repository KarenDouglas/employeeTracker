const { Model, DataTypes } = require('sequelize'); // retrieve methods from sequelize
const sequelize = require('../config/connections'); //
const Department = require('./Department')
class Roles extends Model{}

Roles.init(
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
        },
        salary: {
            type: DataTypes.DECIMAL            
        },
        department_id: {
            type: DataTypes.INTEGER,
            references: {
              model: Department, // Reference to the Department model
              key: 'id', // The primary key in the Department model
              onDelete: 'CASCADE',
            },
        },
    },
    {
        sequelize,
        modelName: 'roles'
    }
);

module.exports =Roles