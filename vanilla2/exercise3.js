const fs = require("fs").promises;

async function readingFile() {
  const file = await fs.readFile("./test.html");
  console.log(file.toString());
}

readingFile();
