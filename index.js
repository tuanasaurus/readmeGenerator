//1. Dependencies - Inquire to ask user questions and grab their input
const inquirer = require('inquirer');
//2. Dependencies - fs module to crete the readme.md in the file system
const fs = require('fs');
//3. Dependencies - Axios to call the github API to grab the user's info
const axios = require('axios');

//Array of question objects with three parameters and key value pairs.
const questions = [
    // {
    //     type: 'input',
    //     name: 'badge',
    //     message: {
    //         "schemaVersion": 1,
    //         "label": "Student Project",
    //         "message": "FREE TO USE",
    //         "color": "orange"
    //     }
    // },
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
        name: 'test',
        message: 'How do you test the app?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is an email that a user can use to contact you?',
    },
]

//Writing the function to fs to append the file
inquirer.prompt(questions).then(async (response) => {
    let userAvatar = '';
    console.log(response);
    console.log(response.gitUsername);
    // Calling the Github API for the user's info
    const queryUrl = `https://api.github.com/users/${response.gitUsername}`;
    try {
        const { data } = await axios.get(queryUrl);
        userAvatar = data.avatar_url;
    } catch (e) {
        console.log(e);
    }

    const error = function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!");
        }};
    //fs.appendFileSync string interpolation to have cleaner line of codes
    // fs.appendFileSync('ReadMe.md', `# ${response.badge}\n`, error);
    fs.appendFileSync('ReadMe.md', `# ${response.tile}\n`, error);
    fs.appendFileSync('ReadMe.md', `# The Name of the repo:\n${response.repoName}\n`, error);
    fs.appendFileSync('ReadMe.md', `## Author:\n${response.gitUsername}\n`, error);
    fs.appendFileSync('ReadMe.md', `## Overview of the project\n${response.description}\n`, error);
    // Made a table of content with anchor tag from the markdown
    fs.appendFileSync('ReadMe.md', `## Table of Contents\n-[Installation](#Installation)
        \n-[Usage](#Usage)
        \n-[License](#License)
        \n-[Contributing Member](#Contributing Member)
        \n-[Test](#Test)
        \n-[Reach Out](#Reach out)
        \n`
        , error);
    fs.appendFileSync('ReadMe.md', `## Installation\\n${response.installation}\n`, error);
    fs.appendFileSync('ReadMe.md', `## Usage\n${response.usage}\n`, error);
    fs.appendFileSync('ReadMe.md', `## License\n${response.license}\n`, error);
    fs.appendFileSync('ReadMe.md', `## Contributing Member\n${response.contributing}\n`, error);
    fs.appendFileSync('ReadMe.md', `## Test\n${response.test}\n`, error);
    fs.appendFileSync('ReadMe.md', `## Reach out\n${response.questions}\n![Me](${userAvatar})`, error);
});

// init();