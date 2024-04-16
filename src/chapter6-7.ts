{
  // 6.7.1
  {
    type HasToString = {
      toString: () => string;
    }
    const useToString1 = (value: HasToString) => console.log(`value is ${value.toString()}`);
    useToString1({
      toString() {
        return "foo!";
      }
    });
    useToString1(3.14);
    
    const useToString2 = (value: HasToString & object) => console.log(`value is ${value.toString()}`);
    useToString2({
      toString() {
        return "foo!";
      }
    });
    // useToString2(3.14);
  }

  // 6.7.2
  {
    const isStringOrNumber = (value: unknown): value is string | number => {
      return typeof value === "string" || typeof value === "number";
    }
    const something: unknown = 123;
    if (isStringOrNumber(something)) {
      console.log(something.toString());
    }

    type Human = {
      type: "Human";
      name: string;
      age: number;
    };
    const isHuman = (value: any): value is Human => {
      if (value == null) return false;
      return (
        value.type === "Human" &&
        typeof value.name === "string" &&
        typeof value.age === "number"
      );
    }

    const assertHuman = (value: any): asserts value is Human => {
      if (value == null) {
        throw new Error('Given value is null or undefined');
      }
      if (
        value.type !== "Human" ||
        typeof value.name !== "string" ||
        typeof value.age !== "number"
      ) {
        throw new Error('Given value is not a Human');
      }
    }
  }
  // 6.7.3
  {
    type NumberAndStrings = [number, ...string[]];
    const arr1: NumberAndStrings = [25, "hoge", "fuga", "hoge"];
    const arr2: NumberAndStrings = [25];
    // const arr3: NumberAndStrings = ["hoge", "fuga"];
    // const arr4: NumberAndStrings = [23, 23, 25];
    // const arr5: NumberAndStrings = [];
  }
  // 6.7.4
  {
    type Fruit = "apple" | "orange" | "strawberry";
    type FruitNumbers = {
      [P in Fruit]: number
    };
    const numbers: FruitNumbers = {
      apple: 3,
      orange: 10,
      strawberry: 20,
    };
    type FruitArrays = {
      [P in Fruit]: P[];
    };
    const numbers2: FruitArrays = {
      apple: ["apple", "apple"],
      orange: ["orange", "orange", "orange"],
      strawberry: [],
    }
  }
  // 6.7.5
  {
    type RestArgs<M> = M extends "string" ? [string, string] : [number, number, number];
    const func = <M extends "string" | "number">(
      mode: M,
      ...args: RestArgs<M>
    ) => {
      console.log(mode, ...args);
    }
    func("string", "hoge", "fuga");
    func("number", 1, 2, 3);
  }
  // 6.7.6
  {
    type T = Readonly<{
      name: string;
      age: number;
    }>;
    type U = Partial<{
      name: string;
      age: number;
    }>;
    type V = Pick<{
      name: string;
      age: number;
    }, "age">;
    type Union = "hoge" | "fuga" | 1 | 2 | 3;
    type W = Extract<Union, string>;
    type X = Exclude<Union, string>;
  }
}