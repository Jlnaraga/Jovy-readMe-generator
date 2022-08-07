// TODO: Include packages needed for this application
const fs = require('fs/promises');
const inquirer = require('inquirer');
const {
    generateMarkdown,
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection
  } = require('./utils/generateMarkdown')

const readMeFormat = ({userName, email, projectTitle, illustration, license, inquirer, installation, repositoryDocument, document, tests}) => {
    return `
# ${projectTitle}
${renderLicenseBadge(license)}

    

## Description
${illustration}

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents 

(Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)

## Installation
${installation}

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage
${repositoryDocument}

Provide instructions and examples for use.

${renderLicenseSection(license)}

${renderLicenseLink(license)}


The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. 
If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).



🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. 
 You might also want to consider adding the following sections.


## Tests
${tests}

## Contact Info:

*GitHub: https://github.com/${userName ?? ""}

*Email:${email}

Go the extra mile and write tests for your application. Then provide examples on how to run them here.`
}

//TODO: Create an array of questions for user input
const questions= [
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'What is your Email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Write a short description of your project?',
        name: 'illustration',
    },
    {
        type: 'list',
        message: 'What kind of licence should your project have?',
        name: 'license',
        choices: [
            'MIT License', 
            'Apache license 2.0', 
            'GNU v3.0',
            'N/A',
        ]       
    },
    {
        type: 'input',
        message: 'What command should be run to install dependecies?',
        name: 'inquirer',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using repo?',
        name: 'repositoryDocument',
    },
    {
        type: 'input',
        message: 'What does the user need to know contributing to the repo?',
        name: 'document',
    },
    {
        type: 'input',
        message: 'What command  should be run to run test?',
        name: 'tests',
    },
];




//TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(({userName, email, projectTitle, illustration, license, inquirer, installation, repositoryDocument, document, tests}) => {
 //TODO: Create a function to write README file 
    const myReadme = readMeFormat ({userName, email, projectTitle, illustration, license, inquirer, installation, repositoryDocument, document, tests});
    
    fs.writeFile("generated readme/README.md",myReadme);
 
})

}

//Function call to initialize app
init();
