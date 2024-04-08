{
  const obj: {
    foo: number;
    bar: string;
  } = {
    foo: 123,
    bar: "Hello, world!",
  }

  type FooBarObj = {
    foo: number;
    bar: string;
  }
  const obj2: FooBarObj = {
    foo: 123,
    bar: "Hello, world!",
  }

  interface FooBarObj2 {
    foo: number;
    bar: string;
  }
  const obj3: FooBarObj2 = {
    foo: 0,
    bar: "string",
  }

  type priceData = {
    [key: string]: number;
  }
  const data: priceData = {
    apple: 220,
    coffee: 120,
    bento: 500,
  }
  data.chicken = 250;

  type MyObj = {
    foo: boolean;
    bar: boolean;
    baz?: number;
  }
  const obj4: MyObj = { foo: false, bar: true };
  const obj5: MyObj = { foo: true, bar: false, baz: 1234 };
  if (obj5.baz !== undefined) {
    console.log(obj5.baz * 100);
  }

  const obj6 = {
    foo: 123,
    bar: "hoge",
  }
  type T = typeof obj6;
  const obj7: T = {
    foo: 0,
    bar: "",
  }
}