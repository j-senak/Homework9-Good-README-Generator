const inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {
       type: "input",
       user: "userName",
       message: "What is your Github username?" 
    },
    {
        type: "input",
        name: "projectName",
        message: "What is your project name?"
    }
    
]).then(data => {
    console.log(data);
    fs.appendFile("README.md", response, function(err){
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
