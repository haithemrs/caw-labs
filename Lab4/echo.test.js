const { exf } = require('./echo');

describe("echo function", () => {

  test("prints the string 5 times", () => {
    console.log = jest.fn(); // mock console

    exf("hello", 5);

    expect(console.log).toHaveBeenCalledTimes(5);
    expect(console.log).toHaveBeenCalledWith("hello");
  });

});
