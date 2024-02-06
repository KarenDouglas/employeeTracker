const { Model, DataTypes } = require('sequelize'); // retrieve methods from sequelize
const sequelize = require('../config/connections'); //
const Role = require('./Roles');
class Employee extends Model{}
// describes Employee Schema
Employee.init(
    {  
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
           
          },  
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
            
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        role_id: {
            type: DataTypes.INTEGER,
            references: {
              model: Role, 
              key: 'id', 
              onDelete: 'CASCADE',
            },
        },
        manager_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Employee, 
                key: 'id', 
                onDelete: 'CASCADE',
            },
        }
    },
    {
        sequelize,
        modelName: 'employee'
    }
);
// establishes relationship between employee and role model for reference key use
Employee.belongsTo(Role, { foreignKey: 'role_id' });
Employee.belongsTo(Employee, { foreignKey: 'manager_id', as: 'manager' });
Employee.hasMany(Employee, { foreignKey: 'manager_id', as: 'directReports' });
module.exports =Employee