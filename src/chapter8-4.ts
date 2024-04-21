// 8.4.1
{
  async function get3(): Promise<number> {
    return 3;
  }
  const p = get3();
  p.then(num => {
    console.log(num);
  });
}
// 8.4.2
{
  const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, duration);
    });
  };
  async function get3() {
    console.log("get3が呼び出されました");
    await sleep(1000);
    console.log("awaitの次に進みました");
    return 3;
  }
  console.log("get3を呼び出します");
  const p = get3();
  p.then(num => {
    console.log(num);
  });
  console.log("get3を呼び出しました");
}
// 8.4.3
{
  const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, duration);
    });
  };
  async function get3() {
    await sleep(1000);
    return 3;
  }
  async function main() {
    const num1 = await get3();
    const num2 = await get3();
    const num3 = await get3();
    return num1 + num2 + num3;
  }
  main().then(result => {
    console.log(result);
  });
}
{
  async function main() {
    const { readFile, writeFile } = await import("fs/promises");

    const fooContext = await readFile("foo.txt", "utf-8");
    await writeFile("bar.txt", fooContext + fooContext);
    console.log("書き込み完了");
  }
  main().then(() => {
    console.log("main()が完了しました");
  });
}
// 8.4.4
{
  async function main() {
    const { readFile, writeFile } = await import("fs/promises");
    try {
      const fooContext = await readFile("foo.txt", "utf-8");
      await writeFile("bar.txt", fooContext + fooContext);
      console.log("書き込み完了");
    } catch {
      console.log("失敗しました");
    }
  }
  main().then(() => {
    console.log("main()が完了しました");
  })
}