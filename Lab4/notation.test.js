const { mean } = require("./notation");

describe("mean function", () => {

  test("computes the average of numbers", () => {
    expect(mean([10, 20, 30])).toBe(20);
  });

  test("works with one element", () => {
    expect(mean([5])).toBe(5);
  });

});
