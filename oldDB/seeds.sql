INSERT INTO department (title)
VALUES ("Human Resource"),
       ("Science"),
       ("Executive"),
       ("Sales"),
       ("Marketing");

INSERT INTO roles(title, salary, department_id)
VALUES("manager", 200,1),
("professor", 400, 2),
("CFO", 200, 3),
("Representative", 100, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id) 
VALUES("John", "Wilson", 2, null),
      ("Thomas", "Dennis", 3, null),
      ("Kevan", "Smith", 1, 3),      
      ("Buddy", "Sonny", 4, 3);  

  