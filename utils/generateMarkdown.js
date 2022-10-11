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
return `## License</br>
---
${renderLicenseBadge(license)}</br>
Permission to use this application is granted under the ${license} license.${renderLicenseLink(license)} 
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![badge](https://img.shields.io/github/languages/top/${data.github}/${data.repo})
  <br> 
  ![badge](https://img.shields.io/github/languages/count/${data.github}/${data.repo})
  <br>
  ![badge](https://img.shields.io/github/issues/${data.github}/${data.repo})
  <br>
  ![badge](https://img.shields.io/github/issues-closed/${data.github}/${data.repo})
  <br>
  ![badge](https://img.shields.io/github/last-commit/${data.github}/${data.repo})
  <br>
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
