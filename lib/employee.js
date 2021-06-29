// The first class is an `Employee` parent class with the following properties and methods:

// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`
// The other three classes will extend `Employee`.

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
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
  getRole() {
    return "employee";
  }
}

module.exports = Employee;
