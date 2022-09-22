const fs = require("fs").promises;

async function writingFile() {
  await fs.writeFile("./test.html", "hello Kenn");
}

writingFile();
