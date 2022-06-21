const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

function init() {
    createManager();
}

const employeeArray = [];

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
    employeeArray.push(manager)
    addMoreEmployees()
});
}

function addMoreEmployees() {
    inquirer.prompt([
        {
            type: "list",
            name: "whatNext",
            message: "Would you like to add a new employee?",
            choice: [
                "New Engineer",
                "New Intern",
                "Exit"
            ]
        }
    ]).then((answer) => {
        switch(answer.whatNext) {
            case "New Engineer":
                createEngineer();
            break;
            case "New Intern":
                createIntern();
            break;
            default:
                exit();
        }
    })
}

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
            message: "What is the team engineer's ID?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the team engineer's e-mail?",
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
        employeeArray.push(engineer)
        addMoreEmployees()
    })
}

// TODO: create the Intern function

function createCard(employee) {
    return `
        <div class="card">
            <h3>${employee.name}</h3>
            <h4>${employee.role}</h4>

            <p>${employee.id}</p>
            <p>${employee.email}</p>
            <p>${employee.managerOffice || employee.engineerGithub || employee.internSchool}</p>

        </div>
    `
}

function createHtml() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${employeeArray.map(createCard)}
    </body>
    </html>
    `
}

fs.writeFileSync("/dist/index.html", createHtml())

init();