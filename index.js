const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");



// function init() {
//     createManager();
// }

const employees = [];

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

// function addMoreEmployees() {
//     inquirer.prompt([
//         {
//             type: "list",
//             name: "whatNext",
//             message: "Would you like to add a new employee?",
//             choice: [
//                 "New Engineer",
//                 "New Intern",
//                 "Exit"
//             ]
//         }
//     ]).then((answer) => {
//         switch(answer.whatNext) {
//             case "New Engineer":
//                 createEngineer();
//                 break;
//             case "New Intern":
//                 createIntern();
//                 break;
//             default:
//                 exit();
//                 break;
//         }
//     })
// }

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


// function createCard(employee) {
//     return `
//         <div class="card">
//             <h3>${employee.name}</h3>
//             <h4>${employee.role}</h4>

//             <p>${employee.id}</p>
//             <p>${employee.email}</p>
//             <p>${employee.managerOffice || employee.engineerGithub || employee.internSchool}</p>

//         </div>
//     `
// }

// function createHtml() {
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
//         ${employeeArray.map(createCard)}
//     </body>
//     </html>
//     `
// }

// fs.writeFileSync("/dist/index.html", createHtml())

start();