const inquirer = require('inquirer')
const { getDepartments, selectDepartment} = require('./routes/api/departmentRoutes')
const { getRoles , addRole, }= require('./routes/api/rolesRoutes')
const { getEmployees, addEmployee,selectRole, selectManager} = require('./routes/api/employeeRoutes')
 

const departmentSelections = async() => { 
    const array = await selectDepartment()
    return array
}  
const roleSelections = async() => { 
    const array = await selectRole()
    return array
}
const managerSelections = async() =>{
    const array = await selectManager()
    return array
}  


const questions = [   
    {
        type: 'list',
        name: 'options',
        message: 'Choose from options',
        choices: [
            { name: "view all roles", value: "roles" },
            { name: "view all employees", value: "employees" },
            { name: "view all departments", value: "departments" },
            { name: "add a role", value: "addRole" },
            { name: "add and employee", value: "addEmployee" },
            { name: "add an employee role", value: "addEmployeeRole" }
        ]
    },  
    {
        type: 'input',
        name: 'newRole',
        message: 'Enter the new role:',
        when: (answers) => answers.options === 'addRole',
    },
   {
    name:"newSalary",
    message:'Enter Salary',
    when: (answers) => answers.options === 'addRole'
   },
   {
    type: 'list',
    name: 'department',
    message: 'Choose from options',
    choices: () => departmentSelections(),
    when: (answers) => answers.options === 'addRole'
   },
   {
    type: 'input',
    name: 'firstName',
    message: 'Enter employee first name',
    when: (answers) => answers.options === 'addEmployee',
    },
   {
    type: 'input',
    name: 'lastName',
    message: 'Enter employee last name',
    when: (answers) => answers.options === 'addEmployee',
    },
    {
        type: 'list',
        name: 'role',
        message: 'Choose from options',
        choices: () => roleSelections(),
        when: (answers) => answers.options === 'addEmployee'
    },
    {
        type: 'list',
        name: 'manager',
        message: 'Choose from options',
        choices: () => managerSelections(),
        when: (answers) => answers.options === 'addEmployee'
    },

];
const promptUser = async() => {
    return inquirer.prompt(questions)
}
// takes in data from prompts 
const initPrompt = async() => {
 const answers= await promptUser() 

    if(answers){
        const {options, newRole, newSalary,department, firstName,lastName, role, manager}  = answers
        switch (options) {
            case 'departments':       
                await getDepartments()
                await initPrompt()
                    break;
            case 'roles':
                await getRoles()
                await initPrompt()  
                    break;
            case 'employees':
                await getEmployees()
                await initPrompt()
                    break;
            case 'addRole':
                await addRole(newRole, newSalary, department)
                await initPrompt()
                break;
            case 'addEmployee':
                await addEmployee(firstName,lastName,role,manager)
                await initPrompt()
                break;
            default:
                break;
        }
    }

}

initPrompt()

