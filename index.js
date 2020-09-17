//1. Dependencies - Inquire to ask user questions and grab their input
const inquirer = require('inquirer');
//2. Dependencies - fs module to crete the readme.md in the file system
const fs = require('fs');
//3. Dependencies - Axios to call the github API to grab the user's info
const axios = require('axios');

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
    {
        type: 'input',
        name: 'profileImage',
        message: 'Who are the contributor(s) to this project?',
    },
]

//Writing the function to fs to append the file

inquirer.prompt(questions).then((response) => {
    console.log(response);

    const error = function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!");
        }};
    //Title of the project with string interpolation to have cleaner line of codes
    fs.appendFileSync('ReadMe.md', `# ${response.tile}\n`, error);
    //Name of Repo = Name of the readme
    fs.appendFileSync('ReadMe.md', `# The Name of the repo:\n${response.repoName}\n`, error);
    //Asking for the username then creating a section for it
    fs.appendFileSync('ReadMe.md', `## Author:\n${response.gitUserName}\n`, error);
    //Description section
    fs.appendFileSync('ReadMe.md', `## Overview of the project\n${response.description}\n`, error);
    //Table of content section with list and linking to the rest of the section
    fs.appendFileSync('ReadMe.md', `## Table of Contents\n-${response.tableOfContents}\n`, error);
    //Installation notes
    fs.appendFileSync('ReadMe.md', `## Installation\\n${response.installation}\n`, error);
    //The usage of the app
    fs.appendFileSync('ReadMe.md', `## Usage\n${response.usage}\n`, error);
    //The license of
    fs.appendFileSync('ReadMe.md', `## License\n${response.license}\n`, error);
    //Name of Repo = Name of the readme
    fs.appendFileSync('ReadMe.md', `# Contributing Member(s)\n${response.contributing}\n`, error);
});

// init();