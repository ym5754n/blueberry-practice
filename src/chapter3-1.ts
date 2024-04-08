import { createInterface } from "readline";

{
  const obj = {
    foo: 123,
    bar: "Hello world!",
  }
  console.log(obj.foo);
  console.log(obj.bar);

  const propName = "foo";
  const obj2 = {
    [propName]: 123,
  }
  console.log(obj2.foo);

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const messages = {
    good: "0以上の数値が入力されました",
    bad: "負の数値を入力しないでください",
  }

  // rl.question('数値を入力してください：', (line) => {
  //   const num = Number(line);
  //   console.log(messages[num >= 0 ? "good" : "bad"]);
  //   rl.close();
  // });

  const obj3 = {
    bar: 345,
    baz: 789,
  };

  const obj4 = {
    foo: 123,
    ...obj3,
  };
  console.log(obj4);
}