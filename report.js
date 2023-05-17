function sortObject(obj) {
  // Sort objects in a descending order
  const sorted = Object.fromEntries(
    Object.entries(obj).sort(([, a], [, b]) => b - a)
  );
  return sorted;
}

function printReport(pages) {
  console.log("Report is starting...");
  const sortedPages = sortObject(pages);
  for (let page in sortedPages) {
    console.log(`Found ${sortedPages[page]} internal links to ${page} `);
  }
}

module.exports = {
  printReport,
  sortObject,
};
