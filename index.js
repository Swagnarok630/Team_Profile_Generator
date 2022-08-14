const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

// Starting with empty array to add employees to
const employees = [];

// Initial prompt for program. Add an employee, create a page, or exit out of program
function start() {
    inquirer.prompt({
        type: "list",
        name: "startChoice",
        message: "What would you like to do?",
        choices: ["ADD AN EMPLOYEE", "GENERATE TEAM PAGE", "EXIT"]
    }).then(answer => {
        switch(answer.startChoice) {
            case "ADD AN EMPLOYEE":
            return createEmployee();
            case "GENERATE TEAM PAGE":
            return createHtml();
            case "EXIT":
            return process.exit();
            default:
        }
    })
}

// Question to prompt for which type of employee to add or to go back to first prompt
function createEmployee() {
    inquirer.prompt({
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "Go back"]
    }).then(answer => {
        switch(answer.employeeType) {
            case "Manager":
            return createManager();
            case "Engineer":
            return createEngineer();
            case "Intern":
            return createIntern();
            case "Go back":
            return start();
            default:
        }
    })
}

// Create a manager function
function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's ID?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's e-mail?",
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the team manager's office number?",
        },
]).then((answers) => {
    const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOffice
        );
    employees.push(manager)
    console.log("Manager added to the team!")
    setTimeout(start, 1500)
});
}

// Create an Engineer function
function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's e-mail?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's Github username?",
        },
    ]).then((answers) => {
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGithub
            );
        employees.push(engineer)
        console.log("Engineer added to the team!")
        setTimeout(start, 1500)
    })
}

// Create an Intern function
function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's ID?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's e-mail?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school did the intern go to?",
        },
    ]).then((answers) => {
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool
            );
        employees.push(intern)
        console.log("Intern added to the team!")
        setTimeout(start, 1500)
    })
}

// Function to render gathered data (array of employees) into HTML file and write the file
function createHtml() {
    const html = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
      </head>
      <body class="p-5 bg-dark">
        <div class="p-5 mb-5 text-bg-dark">
        <h1 class="text-center mb-5 fs-1 fw-bolder text-decoration-underline">THE DREAM TEAM!!!</h1>
        <div class="gap-5 p-5 d-flex flex-wrap justify-content-evenly">
            ${employees.map(employee => employee.createCard()).join("\n")}
        </div>
        </div>
    </body>
    </html>
    `
    fs.writeFileSync("./dist/index.html", html)

    console.log("Team Page Created!")
}

start();