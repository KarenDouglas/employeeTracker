const Department = require('../../models/Department')

// creates multiple departments
const seedDepartment = async() => {
    try{    
        const department = await Department.bulkCreate([
            {
                title: 'Human Resources'
            },
            {
                title: 'Information Technology'
            },
            {
                title: 'Finance'
            },
            {
                title: 'Marketing'
            },
            {
                title: 'Operations'
            }
        ])
        // extracts data for table in console 
        const extractedData = department.map(dept => ({
            id: dept.id,
            title: dept.title,
          }));
          console.log('\nExtracted Data:');
          console.table(extractedData);
     
    }catch(err){
        console.error(err)
    }
    
}


module.exports = {
    seedDepartment
}