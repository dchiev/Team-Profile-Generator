const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



const teamObj = [{}]
async function init () {
 const answers = await inquirer.prompt(questions);
    console.log(answers);
    teamObj.push(answers);
    render("team.html",html, function(err){
        if (err) throw err;
        console.log("You've created your file!")
    })
}
const questions = [
{
    type: "input",
    name: "name",
    message: "What is the team member's name?"
},
{
    type: "list",
    name: "job",
    choices: ["Manager","Engineer", "Intern"],
},
{
    type: "input",
    name: "id",
    message: "What is this role's ID?",
},
{
    type: "input",
    name: "email",
    message: "What is this role's email?",
},
{
    type: "input",
    name: "github",
    message: "What is this role's GitHub username?",
},

]
init();

