const inquirer = require('inquirer');
const axios = require('axios');

inquirer.prompt([
    {
        type: 'input',
        name: 'userInfo',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a brief description about your project.',
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'What are the content section of your readme?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does a user install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'licence',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributor(s) to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What is the title of your project?',
    },
])