{
  // 6.8.1
  {
    // type Option<T> = {
    //   type: "number" | "string";
    //   value: T;
    // }
    // const getOption = (value: Option<number>): void => {
    //   if (value.type === "number") console.log(value.value);
    // }
    // const input1 = {
    //   type: "number",
    //   value: 123,
    // };
    // const input2 = {
    //   type: "string",
    //   value: "123",
    // }
    // getOption(input1);
    // getOption(input2);
    type Option<T> = {
      tag: "some";
      value: T;
    } | {
      tag: "none";
    };
    const showNumberIfExists = (obj: Option<number>) => {
      if (obj.tag === "some") console.log(obj.value);
    }
    const four: Option<number> = {
      tag: "some",
      value: 123,
    }
    const nothing: Option<number> = {
      tag: "none",
    }
    showNumberIfExists(four);
    showNumberIfExists(nothing);
  }
  // 6.8.3
  {
    type Option<T> = {
      tag: "some";
      value: T;
    } | {
      tag: "none";
    }
    const isSome = <T>(obj: Option<T>): obj is { tag: "some"; value: T } => {
      return obj.tag === "some";
    }
    const showNumberIfExists = (obj: Option<number>): void => {
      if (isSome(obj)) {
        console.log(obj.value);
      }
    }
  }
  // 6.8.4
  {
    type Some<T> = {
      tag: "some";
      value: T;
    }
    type None = {
      tag: "none";
    }
    type Option<T> = Some<T> | None;
    const isSome = <T>(obj: Option<T>): obj is Some<T> => {
      return obj.tag === "some";
    }
    const showNumberIfExists = (obj: Option<number>): void => {
      if (isSome(obj)) {
        console.log(obj.value);
      }
    }
  }
  // 6.8.5
  {
    type Some<T> = {
      tag: "some";
      value: T;
    };
    type None = {
      tag: "none";
    }
    type Option<T> = Some<T> | None;
    const isSome = <T>(obj: Option<T>): obj is Some<T> => obj.tag === "some";
    const mapOption = (obj: Option<number>, func: (x: number) => number) => {
      if (isSome(obj)) {
        return {
          tag: "some",
          value: func(obj.value),
        };
      }
      return {
        tag: "none",
      }
    }
    const doubleOption = (obj: Option<number>) => mapOption(obj, x => x * 2);
    const four: Option<number> = { tag: "some", value: 4 };
    const nothing: Option<number> = { tag: "none" };
    console.log(doubleOption(four));
    console.log(doubleOption(nothing));
  }
  // 6.8.6
  {
    type Some<T> = {
      tag: "some";
      value: T;
    }
    type None = {
      tag: "none";
    }
    type Option<T> = Some<T> | None;
    const mapOption = <T, U>(obj: Option<T>, callback: (value: T) => U): Option<U> => {
      switch (obj.tag) {
        case "some":
          return {
            tag: "some",
            value: callback(obj.value),
          }
        case "none":
          return {
            tag: "none",
          }
      }
    }
    const doubleOption = (obj: Option<number>) => mapOption(obj, x => x * 2);
    const four: Option<number> = { tag: "some", value: 4 };
    const nothing: Option<number> = { tag: "none" };
    console.log(doubleOption(four));
    console.log(doubleOption(nothing));
  }
}