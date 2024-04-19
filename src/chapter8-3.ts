import { readFile } from "fs/promises";

// 8.3.1
{
  const p = readFile("foo.txt", "utf-8");

  p.then((data) => {
    console.log(data);
  });
}
// 8.3.2
{
  const p = readFile("foo.txt", "utf-8");

  // p.then((result) => console.log("1", result));
  // p.then((result) => console.log("2", result));
  // p.then((result) => console.log("3", result));
  // p.catch((error) => console.log("error", error));
  p.then((result) => console.log(result), (error: unknown) => console.log(error));
}
// 8.3.3
{
  const p = readFile("foo.txt", "utf-8");

  p.then((result) => console.log(result));
  p.catch((error) => console.log(error));
  p.finally(() => console.log("done"));
}
// 8.3.4
{
  const p = new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(100);
    }, 3000);
  });
  p.then((num) => console.log(num));

  const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, duration);
    });
  };
  sleep(300).then(() => console.log("slept for 0.3 sec."));

  const sleepReject = (duration: number) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(reject, duration);
    });
  };
  sleepReject(300).catch(() => console.log("rejected"));
}