// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions =[
        {
        type:'input',
        name:'title',
        message:'What is the project title?',
        validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your project name!');
                        return false; 
                    }
                } 
        },
        {
        type:'input',
        name:'github',
        message:'What is your GitHub userName?',
        validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub username!');
                        return false; 
                    }
                } 
        },
        {
        type:'input',
        name:'repo',
        message:'Enter the name of your application Github repository.',
        },
        {
        type:'input',
        name:'description',
        message:'Write a brief description of your project:',
        validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a description of your project!');
                        return false; 
                    }
                }
        },
        {
        type:'input',
        name:'installation',
        message:'Describe the installation process:',
        validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter steps required to install your project!');
                        return false; 
                    }
                }
        },
        {
        type:'input',
        name:'usage',
        message:'What is the project usage for?',
        validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a usage description!');
                        return false; 
                    }
                }
        },
        {
        type:'list',
        name:'license',
        message:'Chose the appropriate license for this project:',
        choices:[
        "GNU",
        "Mozilla",
        "Apache",
        "MIT",
        "Boost",
        "Unlicense",
        ],
        validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please choose a license!');
                        return false; 
                    }
                }
        },
        {
        type:'input',
        name:'tests',
        message:'Is there a test included?'
        },
        {
        type:'input',
        name:'contributors',
        message:'Who are the contributors of this projects?'
        },
        {
        type:'input',
        name:'email',
        message:'What is your email address?',
        validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your email address!');
                        return false; 
                    }
                }
        },
];

//Create a function to user input
function userInput(){
return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(`${fileName}.md`,data,
(err) => err ? console.log(err) : console.log(`${fileName}.md has been generated.`))
}

// TODO: Create a function to initialize app
async function init() {
//Async function using questions promisify
try{
const answers = await userInput();
writeToFile(answers.repo,generateMarkdown(answers));

}catch(err){
console.log(err);
}
}

// Function call to initialize app
init();
