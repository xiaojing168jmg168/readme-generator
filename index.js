// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions =function(){
 return inquirer.prompt([
        {
        type:'input',
        name:'projectTitle',
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
        "MIT",
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "Mozilla",
        ],
        default: ["MIT"],
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
        name:'usage',
        message:'How do you use this app?',
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
]);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
questions()
.then(answers => {
console.log(answers);
});

}

// Function call to initialize app
init();
