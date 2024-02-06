const { Model, DataTypes } = require('sequelize'); // retrieve methods from sequelize
const sequelize = require('../config/connections'); 
const Department = require('./Department')
class Roles extends Model{}
//Describes  Role schema
Roles.init(
    {  
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                allowNull: false
            }
          },  
        title: {
            type: DataTypes.STRING,
            allowNull: false            
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
        freezeTableName: true,
        modelName: 'roles'
    }
);
//establishes connection between roles and Departments
Roles.belongsTo(Department, { foreignKey: 'department_id' });
module.exports = Roles