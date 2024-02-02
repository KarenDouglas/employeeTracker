const inquirer = require('inquirer')
const {seedDepartment} = require('./routes/api/departmentRoutes')

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
               
                break;
            default:
                break;
        }
    }

}

initPrompt()

