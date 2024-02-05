const Roles = require('../../models/Roles')
const Department = require('../../models/Department')
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

        const extractedData = roles.map(r => (
          {
            id: r.id,
            title: r.title,
            salary: r.salary,
            manager:r.department_id
          }
        ));
        console.log('\nExtracted SEEDED Role Data:');
        console.table(extractedData);
        
    }catch(err){
        console.error(err)
    }
    
}



const addRole = async(role,sal,dept) => {
  const newRole = await Roles.create({
    title: role,
    salary:sal,
    department_id:dept
  })

  return newRole
}
const getRoles = async () => {
  try {
      const rolesData = await Roles.findAll({
          include: [
              {
                  model: Department, // Assuming you have a Department model
                  attributes: ['title'], // Fetch only the title attribute
                  as: 'department', // Alias for the joined department table
              },
          ],
      });

      const extractedData = rolesData.map(r => ({
          id: r.id,
          title: r.title,
          salary: r.salary,
          department: r.department.title, 
      }));

      console.log('\nExtracted Get Role Data:');
      console.table(extractedData);
  } catch (err) {
      console.error(err);
  }
};

module.exports = {
    seedRoles,
    getRoles,
    addRole,
}