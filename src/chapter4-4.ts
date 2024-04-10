{
  // 4.4.1
  function repeat<T>(element: T, lengh: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  }
  console.log(repeat<string>("a", 5));
  console.log(repeat<number>(123, 3));

  // 4.4.2
  const repeat2 = <T extends {
    name: string;
  }>(element: T, length: number) => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  }

  type HasNameAndAge = {
    name: string;
    age: number;
  }

  console.log(repeat2<HasNameAndAge>({
    name: "hoge",
    age: 100,
  }, 3));
}