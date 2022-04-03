function renderLicenseBadge(license) {
  switch (license) {
    case "GNU GPL v3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case `IBM Public License Version 1.0`:
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    case `ISC License (ISC)`:
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    case `The MIT License`:
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case `None`:
      return `No License`;
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

  ##### ${renderLicenseBadge(data.license)}
  ### TABLE OF CONTENTS:
  #### -Description
  #### -Installation
  #### -Contribution Users
  #### -Project Usage
  #### -Tests
  #### -Contact Me
  

  ## Project Description:
  ##### ${data.description}

  ## Installation Instructions:
  ##### ${data.installation}

  ## Contributing users:
  ##### ${data.contributing}

  ## Project Usage:
  ##### ${data.usage}

  ## Project Tests:
  ##### ${data.tests}

  ## Contact Me:
  #### https://github.com/${data.username} ${data.email}
  `;
}

module.exports = generateMarkdown;
