const fs = require("fs");
const inquirer = require("inquirer");
const { generateMarkdown } = require("./utils/generateMarkdown");

const questions = [

    {
        type: "input",
        name: "Title",
        message: "Add the title of your README",
    },
    {
        type: 'list',
        name: 'License',
        message: 'What license does your repo use?',
        choices: [ 'MIT', 'Apache 2.0', 'GNU', 'BSD',]
    },
    {
        type: "input",
        name: "Description",
        message: "Describe your project",
    },
    {
        type: "input",
        name: "Installation",
        message: "Provide the steps required to install your project",
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide information on how your project is used",
    },
    {
        type: "input",
        name: "Contributing",
        message: "What are the guidelines for this project?",
    },
    {
        type: "input",
        name: "Tests",
        message: "Provide instructions on how to run tests",
    },
    {
        type: 'input',
        name: 'Username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your email address?'
    },
];

function writeToFile(fileName, data) {
    fs.writeFileSync(`./example/${fileName}`, data);
}

function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
    });
}

init();
