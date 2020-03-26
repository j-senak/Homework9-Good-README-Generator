const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

const questions = inquirer.prompt([
    {
       type: "input",
       name: "userName",
       message: "What is your Github username?" 
    },
    {
        type: "input",
        name: "projectName",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project:"
    },
    {
        type: "list",
        name: "projectLicense",
        message: "What kind of license should your project have?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "installDependancies",
        message: "What command should be run to install dependancies?"
    },
    {
        type: "input",
        name: "runTests",
        message: "What command should be used to run tests?"
    },
    {
        type: "input",
        name: "repoInfo",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "repoContribute",
        message: "What does the user need to know about contributing to the repo?"
    }
    
]).then(resData => {
    //console.log(res);
    const queryUrl = `https://api.github.com/users/${resData.userName}`;
    axios.get(queryUrl).then(response => {
        //console.log((response));
        //const data = response.data
        const data = response.data;
        console.log(data.avatar_url);
        console.log(data.email);
        //const readMe = generateReadMe(res);
        const readMe = `
# Your Project Title
        
${resData.projectName}
        
## Description
        
${resData.description}
        
## Table of Contents
        
## Installation
        
${resData.installDependancies}
        
## Usage
        
${resData.repoInfo}
        
## License
        
${resData.projectLicense}
        
## Contributing
        
${resData.repoContribute}
        
## Tests
        
${resData.runTests}
        
## Questions
        
# Github User
${resData.userName}
${data.avatar_url}
${data.email}
            `;
        writeReadMe(readMe);
    });

});

const writeReadMe = str => {
    fs.writeFile("output/README.md", str, err => {
        if(err){
            return console.log(err);
        }
        console.log("Success!");
    })
}

// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
