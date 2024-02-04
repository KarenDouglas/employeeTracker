const Roles = require('../../models/Roles')

const seedRoles = async() => {

    try{    
        
        const roles = await Roles.bulkCreate([
            {
                title: 'HR Manager',
                salary: 80000,
                department_id: 1, 
              },
              {
                title: 'IT Specialist',
                salary: 90000,
                department_id: 2, 
              },
              {
                title: 'Financial Analyst',
                salary: 85000,
                department_id: 3, 
              },
              {
                title: 'Marketing Coordinator',
                salary: 80000,
                department_id: 4, 
              },
              {
                title: 'Operations Manager',
                salary: 85000,
                department_id: 5, 
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

const getRoles = async() => {
  try{
      const rolesData = await Roles.findAll()
      const extractedData = rolesData.map(r => ({
        id: r.id,
        title: r.title,
        salary: r.salary,
        department_id: r.department_id
    }));
            console.log('\nExtracted Get Role Data:');
            console.table(extractedData);
  }catch(err){
      console.error(err)
  }
}

module.exports = {
    seedRoles,
    getRoles
}