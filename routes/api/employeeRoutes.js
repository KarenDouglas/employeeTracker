const Employee = require('../../models/Employee')
const Roles = require('../../models/Roles')
const seedEmployees = async() => {

    try{    
        
        const employees = await Employee.bulkCreate([
            {
            first_name: 'Alice',
            last_name: 'Smith',
            role_id: 1, // HR Manager
            manager_id: null,

            },
            {
            first_name: 'Bob',
            last_name: 'Johnson',
            role_id: 2, // IT Specialist
            manager_id: 1 //Alice
            },
            {
            first_name: 'Charlie',
            last_name: 'Williams',
            role_id: 3, // Financial Analyst
            manager_id: 2 //B0b
            },
            {
            first_name: 'David',
            last_name: 'Brown',
            role_id: 4, // Marketing Coordinator
            manager_id: null //B
            },
            {
            first_name: 'Eva',
            last_name: 'Jones',
            role_id: 5,
            manager_id: null //B // Operations Manager
            },
        ])
        const employeeData = await Employee.findAll({
            include: [
                {
                    model: Roles,
                    attributes: ['title'], // Include only the 'title' attribute from Roles
                },
                {
                    model: Employee, // Include the Employee model for the manager
                    as: 'manager',   // Alias for the manager relationship
                    attributes: ['first_name'], // Include only the 'first_name' attribute
                },
            ],
        });
        // extracts data for table in console 
        const extractedData = employeeData.map(em => ({
            id: em.id,
            first_name: em.first_name,
            last_name: em.last_name,
            role: em.role.title,
            manager: em.manager ? em.manager.first_name : null,
        }));
        console.log('\nExtracted SEEDED Employee Data:');
        console.table(extractedData);
        
    }catch(err){
        console.error(err)
    }
    
}
// renders all employees to the console
const getEmployees = async () => {
    try {
        const employeeData = await Employee.findAll({
            include: [
                {
                    model: Roles,
                    attributes: ['title'], // Include only the 'title' attribute from Roles
                },
                {
                    model: Employee, // Include the Employee model for the manager
                    as: 'manager',   // Alias for the manager relationship
                    attributes: ['first_name'], // Include only the 'first_name' attribute
                },
            ],
        });

        const extractedData = employeeData.map(em => ({
            id: em.id,
            first_name: em.first_name,
            last_name: em.last_name,
            role: em.role.title, // Access the 'title' attribute of the associated role
            manager: em.manager ? em.manager.first_name : null,
        }));

        console.log('\nExtracted Get Employee Data:');
        console.table(extractedData);
    } catch (err) {
        console.error(err);
    }
};
// adds a new employee to db
const addEmployee = async (first, last, rId, mId) => {
        await   getEmployees()
    try {
        const newEmployee = await Employee.create({
            first_name: first,
            last_name: last,
            role_id: rId,
            manager_id: mId
        });

        console.info(`${newEmployee.first_name} ${newEmployee.last_name} was added to Employees table.`);
    } catch (err) {
        console.error(err);
    }
};
// renders an array for selection choices for employee roles
const selectRole = async() =>{
    try {
        const roleData = await Roles.findAll()
        const extractedData = roleData.map(dept => ({
            name: dept.title,
            value: dept.id
          }));
          
   return extractedData
      } catch (err) {
        console.error(err);
        return [];
      }
}
// renders an array for selection choices for employees
const selectManager = async() =>{
    try {
        const managerData = await Employee.findAll()
        const extractedData = managerData.map(em => ({
            name: em.first_name,
            value: em.id
          }));
          
   return extractedData
      } catch (err) {
        console.error(err);
        return [];
      }
}
// renders an array for selection choices for employees
const selectEmployee = async() =>{
    try {
        const employeeData = await Employee.findAll()
        const extractedData = employeeData.map(em => ({
            name: em.first_name,
            value: em.id
          }));
          
   return extractedData
      } catch (err) {
        console.error(err);
        return [];
      }
}
// updates the role category for an employee
const updateEmployeeRole = async (oldId, newId) => {
   const updatedRole =  await Employee.update(
        {
            role_id: newId,

        },
        {
            where: {
                role_id: oldId
            }
        }
    )
   console.log('updated', oldId,newId)
   return
}
module.exports = {
    seedEmployees,
    getEmployees,
    addEmployee,
    selectRole,
    selectManager,
  updateEmployeeRole,
    selectEmployee
}