const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "manage_employeesDB",
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
        break;

      case "Add Role":
        addRole();
        break;

      case "View Employees":
        break;

      case "Add Employee":
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
        viewRole();
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

displayMenu();
