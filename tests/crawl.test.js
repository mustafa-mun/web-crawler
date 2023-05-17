const { test, expect } = require("@jest/globals");
const { normalizeURL } = require("../crawl");

expectedOutput = "twitter.com/home";

test("works with http", () => {
  expect(normalizeURL("http://twitter.com/home")).toBe(expectedOutput);
});

test("works with https", () => {
  expect(normalizeURL("https://twitter.com/home")).toBe(expectedOutput);
});

test("works with capitalized letters", () => {
  expect(normalizeURL("https://twiTter.Com/hOme")).toBe(expectedOutput);
});

test("works with extra slash at the end", () => {
  expect(normalizeURL("https://twitter.com/home/")).toBe(expectedOutput);
});
