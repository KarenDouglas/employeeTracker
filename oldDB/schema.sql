DROP DATABASE IF EXISTS staff_db;
CREATE DATABASE staff_db;

USE staff_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary  DECIMAL,
    department_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(department_id)
    REFERENCES department(id)
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager_id INT,
    role_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(role_id)REFERENCES roles(id),
    FOREIGN KEY(manager_id)REFERENCES employee(id)
);

