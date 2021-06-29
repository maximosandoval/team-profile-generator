// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`

const Employee = require("./employee");
class Intern {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.number = number;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.Id;
  }
  getEmail() {
    return this.number;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "employee";
  }
}

module.exports = Manager;
