// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license){
return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`;
}else{
return "";
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license === "GNU"){
return `[${license}](https://choosealicense.com/licenses/agpl-3.0)`;
} else if(license === "Mozilla"){
return `[${license}](https://choosealicense.com/licenses/mpl-2.0)`;
}else if(license === "Apache"){
return `[${license}](https://choosealicense.com/licenses/mpl-2.0)`;
}else if(license === "MIT"){
return `[${license}](https://choosealicense.com/licenses/mit)`;
}else if(license === "Boost"){
return `[${license}](https://choosealicense.com/licenses/bsl-1.0)`;
}else if (license === "Unlicense"){
return `[${license}](https://choosealicense.com/licenses/unlicense)`;
}else{
return "";
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `
${renderLicenseBadge(license)}</br>
Permission to use this application is granted under the ${license} license. 
---
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
<h1>${data.title}👋</h1>

## Badges
${renderLicenseBadge(data.license)}


## Description
🔍 ${data.description}


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)


## Installation
💾 ${data.installation}


## usage
💻 ${data.usage}


## Contributing
👥 ${data.contributors}


## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}


## Tests
✏️ ${data.tests}


## Questions
✋Reach me here:<br/>
:octocat: Find me on GitHub: [${data.github}](https://github.com/${data.github})<br/>
📩 Email me with any questions: ${data.email}


*This README was generated by* [README-generator](https://github.com/xiaojing168jmg168/readme-generator)
`;
}

module.exports = generateMarkdown;
