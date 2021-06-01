const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "manage_employeesdb",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

//What do you want this app to do?
const menuChoices = [
  {
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View Departments",
      "Add Department",
      "View Roles",
      "Add Role",
      "View Employees",
      "Add Employee",
      "Update Employee",
      "Exit",
    ],
    name: "selection",
  },
];

//function display menu AND prompting user for selection

function displayMenu() {
  inquirer.prompt(menuChoices).then((response) => {
    switch (response.selection) {
      case "View Departments":
        //call function that shows all departments
        viewDepartments();
        break;

      case "Add Department":
        //call function that adds a department
        addDepartment();
        break;

      case "View Roles":
        getRole();
        break;

      case "Add Role":
        addRole();
        break;

      case "View Employees":
        viewEmployee();
        break;

      case "Add Employee":
        addEmployee();
        break;

      case "Update Employee":
        break;

      default:
        connection.end();
        process.exit();
      // quit the app
    }
  });
}

const viewDepartments = () => {
  console.log("Showing all departments...\n");
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    displayMenu();
  });
};

const addDepartment = () => {
  let departmentPrompt = {
    type: "input",
    message: "What is the department name?",
    name: "departmentName",
  };

  //prompt the user for the department name
  inquirer.prompt(departmentPrompt).then((response) => {
    //retrieve the department name entered by the user
    let department = response.departmentName;
    //Insert new department into department table
    connection.query(
      `INSERT INTO department (name) values ("${department}")`,
      (err, res) => {
        if (err) throw err;
        viewDepartments();
      }
    );
  });
};

const getRole = () => {
  inquirer
    .prompt({
      type: "list",
      message: "Which role?",
      choices: [
        "Lawyer",
        "Paralegal",
        "Accountant",
        "Secratary",
        "Tech Support",
        "Sales Rep",
        "Sales Intern",
        "Manager",
      ],
      name: "roles",
    })
    .then((res) => {
      switch (res.roles) {
        case "Lawyer": {
          connection.query(
            //select all employees where role id is 1 for Lawyer
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 1",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              displayMenu();
            }
          );
          break;
        }
        case "Paralegal": {
          connection.query(
            //select all employees where role id is 2 for Paralegal
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 2",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              displayMenu();
            }
          );
          break;
        }
        case "Accountant": {
          connection.query(
            //select all employees where role id is 3 for Accountant
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 3",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              displayMenu();
            }
          );
          break;
        }
        case "Secratary": {
          connection.query(
            //select all employees where role id is 4 for Secratary
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 4",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              displayMenu();
            }
          );
          break;
        }
        case "Tech Support": {
          connection.query(
            //select all employees where role id is 5 for Tech Support
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 5",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              displayMenu();
            }
          );
          break;
        }
        case "Sales Rep": {
          connection.query(
            //select all employees where role id is 6 for Sales Rep
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 6",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              displayMenu();
            }
          );
          break;
        }
        case "Sales Intern": {
          connection.query(
            //select all employees where role id is 7 for Sales Intern
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 7",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              displayMenu();
            }
          );
          break;
        }
        case "Manager": {
          connection.query(
            //select all employees where role id is 8 for Manager
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 8",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              displayMenu();
            }
          );
          break;
        }
      }
    });
};

const addRole = () => {
  let rolePrompt = {
    type: "input",
    message: "What is the title of the role?",
    name: "roleName",
  };
  inquirer.prompt(rolePrompt).then((response) => {
    let role = response.roleName;
    connection.query(
      `INSERT INTO department (name) values ("${role}")`,
      (err, res) => {
        if (err) throw err;
        displayMenu();
      }
    );
  });
};

const viewEmployee = () => {
  console.log("Showing all Employees...\n");
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    displayMenu();
  });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Employee's first name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is the Employee's last name?",
        name: "lastName",
      },
      {
        type: "rawlist",
        message:
          "What is the Employee's role? (1-Lawyer, 2-Paralegal, 3-Accountant, 4-Secratary, 5-Tech Support, 6-Sales Rep, 7-Sales Intern, 8-Manager) ",
        name: "role",
        choices: [1, 2, 3, 4, 5, 6, 7, 8],
      },
    ])
    .then((res) => {
      console.log(res);
      const query = connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: res.firstName,
          last_name: res.lastName,
        },
        (err, res) => {
          if (err) throw err;
          console.log(query.sql, "New employee added!");
          displayMenu();
        }
      );
    });
};
//updateEmployee () => {
// select all employees
// connection.query(`SELECT * FROM employees` )
// we will use list of employees from query into our
//choices array for the update employee prompt
//use inquirer to prompt the use to select an employee to update
//when employee is selected you are prompted to change role
//prompt the user for the new role by asking the role id
//after the prompt for the role id we're going to do another connection.query
//where you would do the update Employee table
//UPDATE employee SET role_id = <the entered role id> WHERE id = <the id of the employee selected> <put value in these>
//after update call viewEmployees();
// }
// const viewRole = () => {
//   console.log("Showing all roles...\n");
//   connection.query("SELECT * FROM role", (err, res) => {
//     if (err) throw err;
//     console.table(res);
//     displayMenu();
//   });
// };

displayMenu();
