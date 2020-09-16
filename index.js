//1. Dependencies - Inquire to ask user questions and grab their input
const inquirer = require('inquirer');
//2. Dependencies - fs module to crete the readme.md in the file system
const fs = require('fs');

//Array of question objects with three parameters and key value pairs.
const questions = [
    {
        type: 'input',
        name: 'title',
        default: 'My Project',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'repoName',
        message: 'What is the name of your repo?',
    },
    {
        type: 'input',
        name: 'gitUsername',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a brief description about your project.',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'What are the content section of your readme, please separate each section with a comma?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does a user install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage for this project?',
    },
    {
        type: 'checkbox',
        name: 'licence',
        message: 'What is the license for this project?',
        choices: [
            "University",
            "Open Source",
            "Public Domain",
            "Free Use"

        ]},
    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributor(s) to this project?',
    },
]

//Writing the function to fs to append the file
inquirer.prompt(questions).then((response) => {
    //Creating the individual sections withing the readme file using
    // https://www.geeksforgeeks.org/node-js-fs-appendfilesync-function/
    //Title of the project
    fs.appendFileSync('ReadMe.md', '#' + response.title + '\n',
        function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!")
        }
    });
    //Name of Repo = Name of the readme
    fs.appendFileSync('ReadMe.md', '# The Name of the repo:' + response.repoName + '\n', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!")
        }
    });
    //Asking for the username then creating a section for it
    fs.appendFileSync('ReadMe.md', '## Author:' +  response.gitUserName + '\n' + '\n', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!")
        }
    });
    //Description section
    fs.appendFileSync('ReadMe.md', '## Overview of the project' + response.description + '\n', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!")
        }
    });
    //Table of content section with list and linking to the rest of the section
    fs.appendFileSync('ReadMe.md', ('## Table of Contents' + '\n' + '- ' + response.tableOfContents.split(',').
        join('\n' + '-')) + '\n', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!")
        }
    });
    //Installation notes
    fs.appendFileSync('ReadMe.md', ('## Installation' + response.installation) + '\n', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!")
        }
    });
    //The usage of the app
    fs.appendFileSync('ReadMe.md', ('## Usage' + response.usage) + '\n', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!")
        }
    });
    //The license of
    fs.appendFileSync('ReadMe.md', ('## License' + response.license) + '\n', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!")
        }
    });
    //Name of Repo = Name of the readme
    fs.appendFileSync('ReadMe.md', ('# Contributing Member(s)' + response.contributing) + '\n', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!")
        }
    });
});