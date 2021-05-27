DROP DATABASE IF EXISTS manage_employeesDB;

CREATE DATABASE manage_employeesDB;

USE manage_employeesDB;

CREATE TABLE employee(
   id INT(11) AUTO_INCREMENT NOT NULL,
   first_name VARCHAR(30),
   last_name VARCHAR(30),
   role_id INT(11) NOT NULL,
   manager_id  INT(11) NULL,
   PRIMARY KEY (id)

);

CREATE TABLE department(
id  INT PRIMARY KEY,
name  VARCHAR(30) --holds department name
);

CREATE TABLE role(
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
)

