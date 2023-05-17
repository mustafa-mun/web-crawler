const { test, expect } = require("@jest/globals");
const { normalizeURL, getURLsFromHTML, isURL } = require("../crawl");

// NORMALIZE URL TESTS
const expectedOutput = "twitter.com/home";

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

// ISURL TESTS

test("returns false when str is not an url", () => {
  expect(isURL("about.html")).toBeFalsy();
});

test("return true when str is an url", () => {
  expect(isURL("https://twitter.com/home")).toBeTruthy();
});

// GETURLFROMHTML TESTS

const htmlInput = `<html>
<header>
    <nav>
      <a href="about.html"><span>Go to About Page</span></a>
    </nav>
</header>
<body>
    <a href="https://boot.dev"><span>Go to Boot.dev</span></a>
</body>
<footer>
    <a href="https://boot.dev/blog"><span>Go to blogs.com</span></a>
</footer>
</html>`;

test.skip("relative URLs converted to absolute URLs", () => {
  expect(getURLsFromHTML(htmlInput)[0]).toBe("https://boot.dev/about.html");
});

test.skip("all 'a' tags are found", () => {
  expect(getURLsFromHTML).toHaveLength(3);
});
