const fs = require("fs");
const os = require("os");
/* fs.writeFileSync(
  "./text.txt",
  "Hello world!! this is the Synchronous write file" //blocking code
); */
fs.writeFile(
  "./text2.txt",
  "Hello world! this is the Asynchronous write file", //Non-blocking code
  (err) => {}
);

/* const fileread = fs.readFileSync("./text.txt", "utf-8"); //to read file synchronously
console.log(fileread);
const fileread2 = fs.readFile("./text2.txt", "utf-8", (err, result) => {
  //to read file asynchronously
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
console.log(fileread2); */

fs.appendFileSync(
  "./text.txt",
  `\n ${Date.now()} This is the example of append file\n`
);
console.log(os.cpus().length);
