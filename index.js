const inquirer = require('inquirer')
const { getDepartments, selectDepartment} = require('./routes/api/departmentRoutes')
const { getRoles , addRole, }= require('./routes/api/rolesRoutes')
const { getEmployees, addEmployee} = require('./routes/api/employeeRoutes')
 

const departmentSelections = async() => { 
    const array = await selectDepartment()
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
   }
];
const promptUser = async() => {
    return inquirer.prompt(questions)
}
// takes in data from prompts 
const initPrompt = async() => {
 const answers= await promptUser() 

    if(answers){
        const {options, newRole, newSalary,department}  = answers
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
            default:
                break;
        }
    }

}

initPrompt()

