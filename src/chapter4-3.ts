{
  // 4.3.1
  type HasName = {
    name: string;
  }
  type HasNameAndAge = {
    name: string;
    age: number;
  }

  const fromAge = (age: number): HasNameAndAge => ({
    name: "hoge",
    age,
  });
  const f: (age: number) => HasName = fromAge;
  const obj: HasName = f(100);

  // 4.3.2
  const showName = (obj: HasName) => {
    console.log(obj.name);
  }
  const g: (obj: HasNameAndAge) => void = showName;

  g({
    name: "hoge",
    age: 100,
  });

  // 4.3.3
  type UnaryFunc = (arg: number) => number;
  type BinaryFunc = (left: number, right: number) => number;
  const double: UnaryFunc = arg => arg * 2;
  const add: BinaryFunc = (left, right) => left + right;
  const bin: BinaryFunc = double;
  console.log(bin(10, 100));
}