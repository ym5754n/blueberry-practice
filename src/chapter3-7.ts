{
  const d = new Date();
  console.log(d);

  const date = new Date("2020-02-03T15:00:00+09:00");
  const timeNum = date.getTime();
  console.log(timeNum);
  const date2 = new Date(timeNum);
  console.log(date2);

  const r = /ab+c/;
  console.log(r.test("abbbbc"));
  console.log(r.test("Hello, abc world!"));
  console.log(r.test("ABC"));
  console.log(r.test("こんにちは"));

  // 3.7.4
  const map: Map<string, number> = new Map();
  map.set("foo", 1234);
  console.log(map.get("foo"));
  console.log(map.get("bar"));
}