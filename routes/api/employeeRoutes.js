const Employee = require('../../models/Employee')
const Roles = require('../../models/Roles')
const seedEmployees = async() => {

    try{    
        
        const employees = await Employee.bulkCreate([
            {
            first_name: 'Alice',
            last_name: 'Smith',
            role_id: 1, // HR Manager
            },
            {
            first_name: 'Bob',
            last_name: 'Johnson',
            role_id: 2, // IT Specialist
            },
            {
            first_name: 'Charlie',
            last_name: 'Williams',
            role_id: 3, // Financial Analyst
            },
            {
            first_name: 'David',
            last_name: 'Brown',
            role_id: 4, // Marketing Coordinator
            },
            {
            first_name: 'Eva',
            last_name: 'Jones',
            role_id: 5, // Operations Manager
            },
        ])
        // extracts data for table in console 
        const extractedData = employees.map(em => ({
            id: em.id,
            first_name: em.first_name,
            last_name: em.last_name,
            role_id: em.role_id
        }));
        console.log('\nExtracted SEEDED Employee Data:');
        console.table(extractedData);
        
    }catch(err){
        console.error(err)
    }
    
}

const getEmployees = async () => {
    try {
        const employeeData = await Employee.findAll({
            include: [
                {
                    model: Roles,
                    attributes: ['title'], // Include only the 'title' attribute from Roles
                },
            ],
        });

        const extractedData = employeeData.map(em => ({
            id: em.id,
            first_name: em.first_name,
            last_name: em.last_name,
            role: em.role.title, // Access the 'title' attribute of the associated role
        }));

        console.log('\nExtracted Get Employee Data:');
        console.table(extractedData);
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    seedEmployees,
    getEmployees
}