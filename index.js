const inquirer = require('inquirer')
const { getDepartments, selectDepartment, addDepartment} = require('./routes/api/departmentRoutes')
const { getRoles , addRole, }= require('./routes/api/rolesRoutes')
const { getEmployees, addEmployee,selectRole, selectManager, updateEmployeeRole, selectEmployee} = require('./routes/api/employeeRoutes')
 



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
const employeeSelections = async() => {
    const array = await selectEmployee()
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
            { name: "add a department", value: "addDept" },
            { name: "update an employee role", value: "updateRole"},
            { name: 'Exit', value: 'exit' }
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
        when: (answers) => answers.options === 'addEmployee',
    },
    {
        type: 'list',
        name: 'manager',
        message: 'Choose from options',
        choices: () => managerSelections(),
        when: (answers) => answers.options === 'addEmployee'
    },
    {
        type: 'input',
        name: 'newDept',
        message: 'Enter the new Department title',
        when: (answers) => answers.options === 'addDept',
    },
    {
        type: 'list',
        name: 'employeeChoice',
        message: 'Choose an Employee to update',
        choices: () => employeeSelections(),
        when: (answers) => answers.options === 'updateRole'
    },
    {
        type: 'list',
        name: 'updatedRole',
        message: 'Select their new role',
        choices: () => roleSelections(),
        when: (answers) => answers.options === 'updateRole',
    },

];
const promptUser = async() => {
    return inquirer.prompt(questions)
}
// takes in data from prompts 
const initPrompt = async() => {
    try {
        const answers = await promptUser();

        if (answers) {
            const { options, newRole, newSalary, department, firstName, lastName, role, manager, newDept, employeeChoice, updatedRole,} = answers;

            switch (options) {
                case 'departments':
                    await getDepartments();
                    break;
                case 'roles':
                    await getRoles();
                    break;
                case 'employees':
                    await getEmployees();
                    break;
                case 'addRole':
                    await addRole(newRole, newSalary, department);
                    break;
                case 'addEmployee':
                    await addEmployee(firstName, lastName, role, manager);
                    break;
                case 'addDept':
                    await addDepartment(newDept);
                    break;
                case 'updateRole':
                    await updateEmployeeRole(employeeChoice, updatedRole);
                    break;
                default:
                    return
                    break;
            }

            await initPrompt(); // Move this line outside of the switch statement to ensure it's always called
        }
    } catch (err) {
        console.error(err);
    }
};



initPrompt()

