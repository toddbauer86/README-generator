const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license are you using for your project?",
    choices: [
      "GNU GPL v3",
      "IBM Public License Version 1.0",
      "ISC License (ISC)",
      "The MIT License",
      "None",
    ],
  },
  {
    type: "input",
    name: "username",
    message: "What is the github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a short description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Project usage:",
  },
  {
    type: "input",
    name: "contributing",
    message: "List contributors (github username):",
  },
  {
    type: "input",
    name: "tests",
    message: "Project tests:",
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFileSync(
      path.join(process.cwd(), "README.md"),
      generateMarkdown(data)
    );
  });
}

// Function call to initialize app
init();
