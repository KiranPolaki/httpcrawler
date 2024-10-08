const { crawlPage } = require("./crawl");
const { printReport } = require("./report.js");
async function main() {
  if (process.argv.length < 3) {
    console.log("no website provided");
    process.exit(1);
  } else if (process.argv.length > 3) {
    console.log("too many command line args");
  }

  const baseURL = process.argv[2];

  console.log(`Starting crawl of ${baseURL}`);
  const pages = await crawlPage(baseURL, baseURL, {});
  printReport(pages);
}

main();
