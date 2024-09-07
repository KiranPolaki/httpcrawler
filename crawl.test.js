const { normalizeURL, getURLsFromHTML } = require("./crawl.js");

const { test, expect } = require("@jest/globals");

// TODO: Remove the repetative calls💀

// * Normalize URLs
test("normalizeURL strip protocal", () => {
  const input = "https://blog.boot.dev/path";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL strip trailing slashes", () => {
  const input = "https://blog.boot.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL capitals", () => {
  const input = "https://Blog.boot.dev/path";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL strip http", () => {
  const input = "http://blog.boot.dev/path";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

// * Get URLS from HTML
test("Get absolute URls from HTML", () => {
  const inputHTMLBody = `
  <html>
  <body>
  <a href="https://blog.boot.dev/path/">Boot.dev Blog</a>
  </body>
  </html>`;
  const inputBaseURL = "https://blog.boot.dev/path/";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://blog.boot.dev/path/"];
  expect(actual).toEqual(expected);
});

test("Get relative URls from HTML", () => {
  const inputHTMLBody = `
  <html>
  <body>
  <a href="/path/">Boot.dev Blog</a>
  </body>
  </html>`;
  const inputBaseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://blog.boot.dev/path/"];
  expect(actual).toEqual(expected);
});

test("Get absoluet & relative URls from HTML", () => {
  const inputHTMLBody = `
  <html>
  <body>
  <a href="https://blog.boot.dev/path1/">Boot.dev Blog</a>
  <a href="/path2/">Boot.dev Blog</a>
  </body>
  </html>`;
  const inputBaseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [
    "https://blog.boot.dev/path1/",
    "https://blog.boot.dev/path2/",
  ];
  expect(actual).toEqual(expected);
});

test("Dont Get URLs that are invallid", () => {
  const inputHTMLBody = `
  <html>
  <body>
  <a href="invalid">Boot.dev Blog</a>
  </body>
  </html>`;
  const inputBaseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [];
  expect(actual).toEqual(expected);
});
