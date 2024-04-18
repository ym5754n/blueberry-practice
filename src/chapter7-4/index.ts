import fs from "fs";

const path = "uhyo.txt";
const text = fs.readFileSync(path, "utf-8");
const pattern = "uhyo";

let tmp = text;
let count = 0;

while(true) {
  if (tmp.indexOf(pattern) !== -1) {
    tmp = tmp.substring(tmp.indexOf(pattern) + pattern.length);
    count++;
  } else {
    break;
  }
}

console.log(count);