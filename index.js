// //This is where the inquire prompts will go for the questions for the end user to enter in their info
const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const fs = require("fs");
const generateHTML = require("./src/generateHTML.js");
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

// TODO: Create a function to write README file
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
      generateHTML(employee);
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
function generateTeam() {
  fs.writeFileSync("./dist/index.html", generateHTML(employee), "utf-8");
  console.log("Team directory created.");
}

// //END OF ARRAY
// //MARKDOWN PROMPT
// inquirer.prompt(questions).then((answers) => {
//   console.log(answers);
//   let information = generateMarkdown(answers);
//   fs.writeFile("index.html", information, (err) => {
//     if (err) throw err;
//   });
// });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFileSync(fileName, data, (err) =>
//     err ? console.error(err) : console.log("File written.")
//   );
// }

// // function to generate
// function writeToFile(fileName, data) {
//   return fs.writeFileSync(fileName, data);
// }
// // function to initialize app
// function init() {
//   inquirer.prompt(questions).then((response) => {
//     // console.log(response);
//     writeToFile("index.html", generateHTML({ ...response }));
//   });
// }
// // Function call to initialize app
// init();

// function begin() {
//   inquirer
//     .prompt([
//       {
//         message: "what is the manager's name",
//         name: "name",
//       },
//     ])
//     .then((answer) => {
//       let newManager = new Manager(answer.name);
//       console.log(newManager);
//       employees.push(newManager);
//       addMore();
//     });
// }
