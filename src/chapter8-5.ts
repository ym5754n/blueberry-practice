import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../uhyo.txt");

{
  const sleep = (duration: number) => {
    return new Promise<void>((resolve, error) => {
      setTimeout(error, duration);
    });
  }

  sleep(1).then(() => {
    process.exit();
  });
  const data = await readFile(dataFile, { encoding: "utf-8" });

  let count = 0;
  let currentIndex = 0;
  while(true) {
    const nextIndex = data.indexOf("uhyo", currentIndex);
    if (nextIndex >= 0) {
      count++;
      currentIndex = nextIndex + 1;
    } else {
      break;
    }
  }
  console.log(count);
}
{
  const sleep = (duration: number) => {
    return new Promise<void>((resolve, error) => {
      setTimeout(error, duration);
    });
  };
  const errorAfter1ms = async() => {
    await sleep(1);
    throw new Error("Timeout");
  }

  const data = await Promise.race([
    readFile(dataFile, { encoding: "utf-8" }),
    errorAfter1ms(),
  ]).catch(() => {
    return "";
  });

  let count = 0;
  let currentIndex = 0;
  while(true) {
    const nextIndex = data.indexOf("uhyo", currentIndex);
    if (nextIndex >= 0) {
      count++;
      currentIndex = nextIndex + 1;
    } else {
      break;
    }
  }
  console.log(count);
}