// Returns link to license
function licenseLink(license) {
  let link = "";

  if (license === "MIT") {
    link = 'https://lbesson.mit-license.org/';
  }
  else if (license === "Apache 2.0") {
    link = 'https://www.apache.org/licenses/LICENSE-2.0';
  }
  else if (license === "GNU") {
    link = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  }
  else if (license === "BSD") {
    link = 'https://opensource.org/licenses/BSD-2-Clause';
  }
  else if (license === "") {
    return "";
  }

  return `${link}`;
};

// Returns link to license badge
function licenseBadge(license) {
  let badge = "";

  if (license === "MIT") {
    badge = '[![MIT license](https://img.shields.io/badge/License-MIT-green.svg)]';
  }
  else if (license === "Apache 2.0") {
    badge = '[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue)]';
  }
  else if (license === "GNU") {
    badge = '[![License: GNU](https://img.shields.io/badge/license-GNU-red)]';
  }
  else if (license === "BSD") {
    badge = '[![License: BSD](https://img.shields.io/badge/License-BSD-blue.svg)]';
  }
  else if (license === "") {
    return "";
  }

  return `${badge}`;
};

//Creates a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.Title}

  # License
  ${licenseBadge(data.License)}
  
  ${licenseLink(data.License)}

  # Description
  ${data.Description}


  # Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  # Installation
  How to install: 
  ${data.Installation}


  # Usage
  ${data.Usage}


  # Contributing
  ${data.Contributing}


  # Tests
  Testing Instructions: 
  ${data.Tests}


  # Questions
  Contact me if you have any questions

  Github Profile: ${data.Username}

  Email: ${data.Email}
  `;
}

module.exports = { generateMarkdown };
