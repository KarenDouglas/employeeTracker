const inquirer = require('inquirer')
const { getDepartments} = require('./routes/api/departmentRoutes')
const {getRoles}= require('./routes/api/rolesRoutes')
const {getEmployees} = require('./routes/api/employeeRoutes')

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
    }    
];
const promptUser = () => {
    return inquirer.prompt(questions)
}
// takes in data from prompts 
const initPrompt = async() => {
 const answers= await promptUser() 

    if(answers){
        const {options}  = answers
        switch (options) {
            case 'departments':       
                getDepartments()
                break;
            case 'roles':
                getRoles()  
                break;
            case 'employees':
                getEmployees()
                break;    
            default:
                break;
        }
    }

}

initPrompt()

