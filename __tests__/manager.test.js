const Manager = require("../lib/manager");

// test for Manager
describe("Manager", () => {
  it("Return an object", () => {
    const manager = new Manager();

    expect(typeof manager).toBe("object");
  });
});

// test for getOfficeNum
describe("getOfficeNumer", () => {
  it("Return a number of the office for the manager", () => {
    const officeNum = new Manager("Amber", 1, "fakeemail@gmail.com", 12);

    expect(officeNumer.getOfficeNumer()).toEqual(12);
  });
});

// test for getRole
describe("getRole", () => {
  it("should return a string of employees for of manager", () => {
    const role = new Manager("Amber", 1, "fakeemail@gmail.com", 12, "Manager");

    expect(role.getRole()).toEqual("Manager");
  });
});
