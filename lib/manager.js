// In addition to `Employee`'s properties and methods, `Manager` will also have the following:
// * `officeNumber`
// * `getRole()`&mdash;overridden to return `'Manager'`

const Employee = require("./employee");

class Manager {
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
  getNumber() {
    return this.number;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "employee";
  }
}

module.exports = Manager;
