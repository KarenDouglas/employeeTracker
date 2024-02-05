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
        console.log('\nExtracted SEEDED department Data:');
        console.table(extractedData);
        
    }catch(err){
        console.error(err)
    }
    
}

const getDepartments = async() => {
    try{
        const departmentData = await Department.findAll()
            const extractedData = departmentData.map(dept => ({
                id: dept.id,
                title: dept.title,
              }));
              console.log('\nExtracted GET department Data:');
              console.table(extractedData);
    }catch(err){
        console.error(err)
    }
}

const addDepartment = async(title) => {
    const newDept = await Department.create({
      title: title,
    })
}
const selectDepartment = async() =>{
    try {
        const departmentData = await Department.findAll()
        const extractedData = departmentData.map(dept => ({
            name: dept.title,
            value: dept.id
          }));
          
   return extractedData
      } catch (err) {
        console.error(err);
        return [];
      }
}
module.exports = {
    seedDepartment,
    getDepartments,
    selectDepartment,
    addDepartment
}