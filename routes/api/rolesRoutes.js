const Roles = require('../../models/Roles')
const Department = require('../../models/Department')

const seedRoles = async() => {

    try{    
        
        const roles = await Roles.bulkCreate([
            {
                title: 'HR Manager',
                salary: 80000,
                department_id: 1, // Replace with the actual department_id
              },
              {
                title: 'IT Specialist',
                salary: 90000,
                department_id: 2, // Replace with the actual department_id
              },
              {
                title: 'Financial Analyst',
                salary: 85000,
                department_id: 3, // Replace with the actual department_id
              },
              {
                title: 'Marketing Coordinator',
                salary: 80000,
                department_id: 4, // Replace with the actual department_id
              },
              {
                title: 'Operations Manager',
                salary: 85000,
                department_id: 5, // Replace with the actual department_id
              },
        ])
        // extracts data for table in console 
        const extractedData = roles.map(r => ({
            id: r.id,
            title: r.title,
            salary: r.salary,
            department_id: r.department_id
        }));
        console.log('\nExtracted SEEDED Role Data:');
        console.table(extractedData);
        
    }catch(err){
        console.error(err)
    }
    
}

module.exports = {
    seedRoles
}