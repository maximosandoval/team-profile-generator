//This is where the inquire prompts will go for the questions for the end user to enter in their info

const questions = [
  // What is your first name?
  {
    type: "input",
    name: "name",
    message: "What is your first name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You MUST to enter a name.");
        return false;
      }
    },
  },
  // What is your ID?
  {
    type: "input",
    name: "id",
    message: "Enter ID",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("You MUST provide an ID.");
        return false;
      }
    },
  },
  // What is your title?
  {
    type: "input",
    name: "title",
    message: "What is your title?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("You MUST enter a title.");
        return false;
      }
    },
  },
  // What is your phone number?
  {
    type: "input",
    name: "phone",
    validate: (phoneInput) => {
      if (phoneInput) {
        return true;
      } else {
        console.log("You MUST provide a phone number.");
        return false;
      }
    },
  },
  // What is your email address?
  {
    type: "input",
    name: "email",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("You MUST provide an email address.");
        return false;
      }
    },
  },
  // What school did you attend?
  {
    type: "input",
    name: "school",
    message: "Name of school",
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Select a license to continue.");
        return false;
      }
    },
  },
  // Github Username
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username.",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Enter your GitHub username to continue.");
        return false;
      }
    },
  },
  // Email Address
  {
    type: "input",
    name: "email",
    message: "Include your email (Not Required).",
  },
];

//END OF ARRAY
//MARKDOWN PROMPT
inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  let information = generateMarkdown(answers);
  fs.writeFile("index.html", information, (err) => {
    if (err) throw err;
  });
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) =>
    err ? console.error(err) : console.log("File written.")
  );
}

// function to generate
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}
// function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    // console.log(response);
    writeToFile("index.html", generateHTML({ ...response }));
  });
}
// Function call to initialize app
init();
