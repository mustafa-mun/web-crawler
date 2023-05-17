const { JSDOM } = require("jsdom");

function normalizeURL(url) {
  const newURL = new URL(url);
  // Sanitize the url
  let sanitized = newURL.toString().toLowerCase();
  // If url ends with '/'
  if (sanitized.endsWith("/")) {
    // remove the last char
    sanitized = sanitized.slice(0, -1);
  }
  // Create new url with sanitized url and return normalized url
  const sanitizedURL = new URL(sanitized);
  return sanitizedURL.hostname + sanitizedURL.pathname;
}

function isURL(str) {
  try {
    return new URL(str);
  } catch (error) {
    return false;
  }
}

function getURLsFromHTML(htmlBody, baseURL) {
  const dom = new JSDOM(htmlBody);
  const aTags = dom.window.document.querySelectorAll("a");
  const output = [];

  for (let tag of aTags) {
    if (!isURL(tag)) {
      let url = `${baseURL}${tag.href}`;
      output.push(url);
    } else {
      output.push(tag.href);
    }
  }
  return output;
}

module.exports = {
  normalizeURL,
  getURLsFromHTML,
  isURL,
};
