// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

  let licenseKind = ''
  if(license === 'MIT License') {
    licenseKind = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'Apache license 2.0') {
    licenseKind = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (license === 'GNU v3.0') {
    licenseKind = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else {
    licenseKind = ""
  }
  return licenseKind;
};

function generateMarkdown(data) {
  return `# ${data.title}
  ## license 
  ${renderLicenseBadge(license)}`
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let myLicenseLink = ""
    if(license === 'MIT License') {
      myLicenseLink = `(https://opensource.org/licenses/MIT)`
    } else if (license === 'Apache license 2.0') {
      myLicenseLink = `(https://opensource.org/licenses/Apache-2.0)`
    } else if (license === 'GNU General Public License v3.0') {
      myLicenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`
    } else {
      myLicenseLink= ""
    }
    return myLicenseLink;
  };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let myLicenseSection = '## License';
    if(license === 'N/A') {
      return "";
    }
      return myLicenseSection;
  }
  
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
