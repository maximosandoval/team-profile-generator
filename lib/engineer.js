//Extend the employee variables to engineer, intern, and manager
//Add all the values as well as github to the engineer

const Employee = require("./employee");

//super is used to extend calls
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, github);
    this.github = github;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.Id;
  }
  getEmail() {
    return this.email;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "engineer";
  }
}

module.exports = Engineer;
