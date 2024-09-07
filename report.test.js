const { sortPages } = require("./report.js");

const { test, expect } = require("@jest/globals");

test("Sort one or 2 Pages", () => {
  const input = {
    "https://wagslane.dev/path": 1,
    "https://wagslane.dev": 3,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://wagslane.dev", 3],
    ["https://wagslane.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});

test("Sort 5 Pages", () => {
  const input = {
    "https://wagslane.dev/path": 1,
    "https://wagslane.dev": 3,
    "https://wagslane.dev/path2": 9,
    "https://wagslane.dev/path3": 5,
    "https://wagslane.dev/path4": 2,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://wagslane.dev/path2", 9],
    ["https://wagslane.dev/path3", 5],
    ["https://wagslane.dev", 3],
    ["https://wagslane.dev/path4", 2],
    ["https://wagslane.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});
