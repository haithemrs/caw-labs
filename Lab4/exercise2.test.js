const { first, last, joinColors, chunk } = require("./exercise2");

describe("first()", () => {
  test("returns first 2 elements", () => {
    expect(first([1,2,3], 2)).toEqual([1,2]);
  });

  test("returns empty for null array", () => {
    expect(first(null, 3)).toEqual([]);
  });
});

describe("last()", () => {
  test("returns last 2 elements", () => {
    expect(last([1,2,3], 2)).toEqual([2,3]);
  });
});

describe("joinColors()", () => {
  test("joins colors without spaces", () => {
    expect(joinColors(["Red","Green","White"], "")).toBe("RedGreenWhite");
  });

  test("joins using commas", () => {
    expect(joinColors(["Red","Green","White"])).toBe("Red,Green,White");
  });
});

describe("chunk()", () => {
  test("chunks array of 5 elements by size 2", () => {
    expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
  });
});
