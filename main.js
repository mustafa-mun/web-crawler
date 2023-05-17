const { crawlPage } = require("./crawl");

async function main() {
  const args = process.argv.slice(2);
  if (args.length !== 1) {
    throw new Error("Argument arrays length should be 1!");
  }
  console.log(`Crawler is starting with URL: ${args[0]}`);
  try {
    const links = await crawlPage(args[0]);
    console.log(links);
  } catch (error) {
    console.log(error.message);
  }
}

main();
