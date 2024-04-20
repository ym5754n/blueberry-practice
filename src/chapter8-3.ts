import { read } from "fs";
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
// 8.3.5
{
  const p = Promise.resolve(100);
  p.then((result) => console.log(result));
}
// 8.3.6
{
  const pFoo = readFile("foo.txt", "utf-8");
  const pBar = readFile("foo.txt", "utf-8");
  const pBaz = readFile("foo.txt", "utf-8");

  const p = Promise.all([pFoo, pBar, pBaz]);

  p.then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  });
}
{
  const p = Promise.all([
    readFile("foo.txt", "utf-8"),
    readFile("foo.txt", "utf-8"),
    readFile("foo.txt", "utf-8"),
  ]);
  p.then(([foo, bar, baz]) => {
    console.log(foo);
    console.log(bar);
    console.log(baz);
  })
}
{
  const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
      setTimeout(reject, duration);
    })
  };
  const p = Promise.race([
    readFile("foo.txt", "utf-8"),
    sleepReject(5000),
  ]);
  p.then((result) => {
    console.log("success", result);
  }, (error: unknown) => {
    console.log("failed", error);
  });
}
// 8.3.7
{
  const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
      setTimeout(reject, duration);
    })
  };
  const p = Promise.allSettled([
    readFile("foo.txt", "utf-8"),
    sleepReject(5000),
  ]);
  p.then((result) => console.log(result));
}
{
  const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
      setTimeout(reject, duration);
    })
  };
  const p = Promise.any([
    readFile("foo.txt", "utf-8"),
    sleepReject(5000),
  ]);
  p.then((result) => {
    console.log(result);
  });
}
// 8.3.8
{
  const p = readFile("foo.txt", "utf-8");
  const p2 = p.then((result) => result + result);
  p2.then((result) => {
    console.log(result);
  });
}
{
  const p = readFile("foo.txt", "utf-8");
  const p2 = p.catch(() => "");
  p2.then((result) => {
    console.log(result);
  });

  readFile("foo.txt", "utf-8")
    .finally(() => console.log("foo.txt is loaded?"))
    .catch(() => "")
    .then((result) => console.log(result));
}
// 8.3.9
{
  const repeat10 = (str: string) => {
    return new Promise<string>((resolve) => {
      setTimeout(
        () => resolve(str.repeat(10)),
        1000
      );
    });
  }
  readFile("foo.txt", "utf-8")
    .then((result) => repeat10(result))
    .then((result) => {
      console.log(result);
    });
}
// 8.3.11
{
  import("fs/promises")
    .then(({ readFile }) =>
      readFile("foo.txt", "utf-8")
    )
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}