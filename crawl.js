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

async function crawlPage(baseURL, currentURL = baseURL, pages = {}) {
  if (new URL(baseURL).hostname !== new URL(currentURL).hostname) return pages;
  const normalized = normalizeURL(currentURL);

  if (pages[normalized] > 0) {
    pages[normalized] += 1;
    return pages;
  }

  pages[normalized] = 1;

  try {
    const response = await fetch(currentURL);
    if (response.status >= 400) {
      throw new Error(`Status error: ${response.status}`);
    }
    if (!response.headers.get("content-type").includes("text/html")) {
      throw new Error(
        `Content-type error, Content-tpe is: ${response.headers.get(
          "content-type"
        )}`
      );
    }
    const HTML = await response.text();
    const URLs = getURLsFromHTML(HTML, baseURL);

    for (let url of URLs) {
      pages = await crawlPage(baseURL, url, pages);
    }
    return pages;
  } catch (error) {
    console.log(error.message);
    return pages;
  }
}

module.exports = {
  normalizeURL,
  getURLsFromHTML,
  isURL,
  crawlPage,
};
