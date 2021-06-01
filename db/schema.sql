  
DROP DATABASE IF EXISTS manage_employeesdb;
CREATE DATABASE manage_employeesdb;
USE manage_employeesdb;


-- employee table
Create Table employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT 
);

-- role table
Create Table role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    
);
--department table
Create Table department (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30)

)

