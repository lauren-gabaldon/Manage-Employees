const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "example.org",
  user: "bob",
  password: "secret",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

//What do you want this app to do?
