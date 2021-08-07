// //This is where the inquire prompts will go for the questions for the end user to enter in their info
const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const fs = require("fs");
// const { generateTeam } = require("./src/generateHTML.js");
// const generateTeam = require("./src/generateHTML.js");
const employee = [];
const questions = [
  {
    type: "list",
    message:
      "Please choose an employee you would like to enter into the directory.",
    name: "choice",
    choices: ["Manager", "Engineer", "Intern", "No more"],
  },
];

const manager = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your ID?",
  },
  {
    type: "input",
    name: "officenumber",
    message: "What is your office number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

const engineer = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your ID?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your gitHub?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

const intern = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your ID?",
  },
  {
    type: "input",
    name: "school",
    message: "What school did you attend?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write file
// function writeToFile(fileName, data) {
//   fs.writeFileSync(fileName, data, (err) =>
//     err ? console.error(err) : console.log("File written.")
//   );
// }

// function to initialize app
function init() {
  inquirer.prompt(questions).then((answer) => {
    if (answer.choice === "No more") {
      console.log(employee);
      writeToFile(generateTeam(employee));
      return;
    }

    //Choose Manager Statement
    if (answer.choice === "Manager") {
      inquirer.prompt(manager).then((response) => {
        const manager = new Manager(
          response.name,
          response.id,
          response.email,
          response.officenumber
        );
        employee.push(manager);
        init();
      });
    }
    //Choose Engineer Statement
    if (answer.choice === "Engineer") {
      inquirer.prompt(engineer).then((response) => {
        const engineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response.github
        );
        employee.push(engineer);
        init();
      });
    }

    //Choose Intern Statement
    if (answer.choice === "Intern") {
      inquirer.prompt(intern).then((response) => {
        const intern = new Intern(
          response.name,
          response.id,
          response.email,
          response.school
        );
        employee.push(intern);
        init();
      });
    }
  });
}
// Initialize app
init();

// Create files of employees
function writeToFile(data) {
  fs.writeFile("./dist/generate_team.html", data, (err) => {
    if (err) throw err;
  });
  return;
}

function generateTeam(arr) {
  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="dist/style.css">
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <script
      src="https://kit.fontawesome.com/3ff242710e.js"
      crossorigin="anonymous"
    ></script>
      <title>Team Builder</title>
  </head>
  <body>
  <body class="bg-light">
  <header>
      <div class="jumbotron jumbotron-fluid">
          <div class="container">
              <h1 class="display-4 text-primary">My Team</h1>
          </div>
      </div>
      
  </header>`;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].getRole() == "Manager") {
      html += `
      <div class="card col-sm-3 m-2 border border-info">
                    <div class="card-body">
                        <h5 class="card-title text-info">${arr[i].name}</h5>
                        <p class="card-text text-secondary">${arr[
                          i
                        ].getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${
                          arr[i].id
                        }</li>
                        <li class="list-group-item">Email: <a href="mailto:${
                          arr[i].email
                        }" class="text-body">${arr[i].email}</a></li>
                        <li class="list-group-item">Office Number: ${
                          arr[i].officenumber
                        }</li>
                    </ul> 
                </div>`;
    }
    if (arr[i].getRole() == "Engineer") {
      html += `
      <div class="card col-sm-3 m-2 border border-info">
                    <div class="card-body">
                        <h5 class="card-title text-info">${arr[i].name}</h5>
                        <p class="card-text text-secondary">${arr[
                          i
                        ].getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${
                          arr[i].id
                        }</li>
                        <li class="list-group-item">Email: <a href="mailto:${
                          arr[i].email
                        }" class="text-body">${arr[i].email}</a></li>
                        <li class="list-group-item">Github: <a href="https://www.github.com/${
                          arr[i].github
                        }" class="text-body">${arr[i].github}</a></li>
                    </ul> 
                </div>`;
    }
    if (arr[i].getRole() == "Intern") {
      html += `
      <div class="card col-sm-3 m-2 border border-info">
                    <div class="card-body">
                        <h5 class="card-title text-info">${arr[i].name}</h5>
                        <p class="card-text text-secondary">${arr[
                          i
                        ].getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${
                          arr[i].id
                        }</li>
                        <li class="list-group-item">Email: <a href="mailto:${
                          arr[i].email
                        }" class="text-body">${arr[i].email}</a></li>
                        <li class="list-group-item">School: ${
                          arr[i].school
                        }</li>
                    </ul> 
                </div>`;
    }
  }

  html += `
   
           
  </body>
  </html>`;

  return html;
}
