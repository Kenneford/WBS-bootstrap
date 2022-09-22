import { promises as fs } from "fs";

const readingFile = async () => {
  const file = await fs.readFile("./test.html");
  console.log(file.toString());
};

readingFile();
