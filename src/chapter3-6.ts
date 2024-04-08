{
  // 3.6.2
  const nested = {
    num: 123,
    obj: {
      foo1: "hello",
      bar: "world",
    },
  }
  const { num, obj: { foo1 } } = nested;
  console.log(num);
  console.log(foo1);

  // 3.6.4
  {
    type Obj = { foo?: number };
    const obj1: Obj = {};
    const obj2: Obj = { foo: -1234 };
    const { foo = 500 } = obj1;
    console.log(foo);
    const { foo: bar = 500 } = obj2;
    console.log(bar);
  }
  {
    type NestetObj = {
      obj?: {
        foo: number
      }
    };
    const nested1: NestetObj = {
      obj: { foo: 123 }
    };
    const nested2: NestetObj = {};

    const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
    const { obj: { foo: foo2 } = { foo: 500 } } = nested2; 
  }
}