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
    // Try creating a URL object with input str
    return new URL(str);
  } catch (error) {
    // URL couldn't be initialized, str is not an URL.
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

async function crawlPage(baseURL, currentURl = baseURL, pages = {}) {
  if (new URL(baseURL).hostname !== new URL(currentURl).hostname) return pages;
  const normalized = normalizeURL(currentURl);

  if (pages[normalized]) {
    pages[normalized] += 1;
    return pages;
  }
  try {
    const response = await fetch(currentURl);
    if (response.status >= 400) {
      throw new Error("Status error");
    }
    if (!response.headers.get("content-type").includes("text/html")) {
      throw new Error("Content-type error");
    }
    const HTML = await response.text();
    const URLs = getURLsFromHTML(HTML, baseURL);

    for (let url of URLs) {
      const normalized = normalizeURL(url);
      pages[normalized] = 1;
      await crawlPage(baseURL, url, pages);
    }
    return pages;
  } catch (error) {
    console.log(error.message);
  }
}

crawlPage(
  "https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program"
);

module.exports = {
  normalizeURL,
  getURLsFromHTML,
  isURL,
  crawlPage,
};
