const inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
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
    
]).then(data => {
    console.log(data);
    fs.appendFile("README.md", data, err => {
        if(err){
            return console.log(err);
        }
        console.log("Success!");
    })
});


const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
