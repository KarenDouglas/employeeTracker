SELECT employee.id, employee.first_name, employee.last_name,
       roles.title AS role_title, roles.salary AS role_salary, manager_id, 
       department.title AS department_name
FROM employee
LEFT JOIN roles ON employee.role_id = roles.id
LEFT JOIN department ON roles.department_id = department.id;