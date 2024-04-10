{
  // 4.1.1
  function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    return result;
  }
  console.log(range(4,10));

  // 4.1.2
  function helloWorldNTimes(n: number): void {
    if (n >= 10) {
      console.log(`${n} times is too much`);
      return;
    }
    for (let i = 0; i < n; i++) {
      console.log("Hello, world");
    }
  }
  helloWorldNTimes(10);

  // 4.1.3
  type Human = {
    height: number;
    weight: number;
  };
  const calcBMI = function({ height, weight }: Human): number {
    return weight / height ** 2;
  };
  const person: Human = { height: 1.55, weight: 55 };
  console.log(calcBMI(person));

  // 4.1.4
  const calcBMI2 = ({
    height, weight
  }: Human): number => {
    return weight / height ** 2;    
  };
  console.log(calcBMI2(person));

  // 4.1.6
  const obj = {
    double(num: number): number {
      return num * 2;
    },
    double2: (num: number): number => num * 2,
  }

  // 4.1.7
  const sum = (...args: number[]): number => {
    let result = 0;
    for (const num of args) {
      result += num;
    }
    return result;
  }
  console.log(sum(1,2,3));
  console.log(sum(1,2,3,4,5));

  // 4.1.9
  const toLowerOrUpper = (str: string, upper?: boolean): string => {
    if (upper) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  }
  console.log(toLowerOrUpper("Hello"));
  console.log(toLowerOrUpper("hello", true));
  console.log(toLowerOrUpper("HELLO", false));

  // 4.1.10
  type User = { name: string, age: number };
  const getName = (u: User): string => u.name;
  const users: User[] = [
    { name: "hoge", age: 15},
    { name: "fuga", age: 20},
  ]
  const names = users.map(getName);
  console.log(names);
}