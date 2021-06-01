DROP DATABASE IF EXISTS manage_employeesDB;

CREATE DATABASE manage_employeesDB;

USE manage_employeesDB;

CREATE TABLE department(
id  INT AUTO_INCREMENT PRIMARY KEY,
name  VARCHAR(30)  
);

CREATE TABLE role(
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE employee(
   id INT AUTO_INCREMENT NOT NULL,
   first_name VARCHAR(30),
   last_name VARCHAR(30),
   role_id INT,
   manager_id  INT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (role_id) REFERENCES role(id)
);

