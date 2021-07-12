const Engineer = require("../lib/engineer");

// test for engineer
describe("Engineer", () => {
  it("Return an object", () => {
    const engineer = new Engineer();

    expect(typeof engineer).toBe("object");
  });
});

// test for getGithub
describe("getGithub", () => {
  it("Return a sting of engineers github profile", () => {
    const github = new Engineer(
      "Amber",
      1,
      "fakeemail@gmail.com",
      "MaximoSandoval"
    );

    expect(github.getGithub()).toEqual("MaximoSandoval");
  });
});

// test for getRole
describe("getRole", () => {
  it("Return a string of employees role", () => {
    const role = new Engineer(
      "Amber",
      1,
      "fakeemail@gmail.com",
      "MaximoSandoval",
      "Engineer"
    );

    expect(role.getRole()).toEqual("Engineer");
  });
});
