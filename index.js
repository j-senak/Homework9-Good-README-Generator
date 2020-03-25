var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {
       type: "input",
       name: "title",
       message: "What is the title of this project?" 
    },
    {
        type: "input",

    }
    
]).then(function(response) {
    console.log(response.title);
    fs.appendFile("README.md", response.title, function(err){
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
