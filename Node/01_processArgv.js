// here we are creating file using process and argv methods
//process where we this method gives more property so that we can use it while script running

const fs = require("fs");
//fs.writeFileSync("sadas.js", "data");

const input = process.argv;

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.writeFileSync(input[3]);
} else {
  console.log("invalid input");
}
