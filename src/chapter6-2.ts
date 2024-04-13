{
  // 6.2.1
  {
    type FooString = "foo";
    const foo: FooString = "foo";
    // const bar: FooString = "bar";
  }
  // 6.2.2
  {
    const getHelloStr = (): `Hello, ${string}!` => {
      const rand = Math.random();
      if (rand < 0.3) {
        return "Hello, world!";
      } else if (rand < 0.6) {
        return "Hello, my world!";
      }
      // } else if (rand < 0.9) {
      //   return "Hello, world.";
      // } else {
      //   return "Hell, world!";
      // }
      return "Hello, world!";
    }
    const signNumber = (type: "plus" | "minus") => type === "plus" ? 1 : -1;
    console.log(signNumber("plus"));
    console.log(signNumber("minus"));
    // console.log(signNumber("hoge"));
  }
}