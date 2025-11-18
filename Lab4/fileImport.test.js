const { mean } = require("./fileImport");

test("mean through fileImport works", () => {
  expect(mean([4, 6])).toBe(5);
});
