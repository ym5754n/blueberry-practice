{
  // 4.6.1
  const getFizzBuzzString = (num: number): string => {
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return String(num);
    }
  }

  const sequence = (start: number, end: number): number[] => {
    const result: number[] = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }

  for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    // console.log(message);
  }

  // 4.6.3
  function map<T, U>(array: T[], callback: (x: T) => U): U[] {
    const result: U[] = [];
    for (const num of array) {
      result.push(callback(num));
    }
    return result;
  }
  const data = [1, 1, 2, 3, 5, 8, 13];
  const result: number[] = map(data, (x) => x * 10);
  console.log(result);

  const data2 = [1, -3, -2, 8, 0, -1];
  const result2: boolean[] = map(data2, (x) => x >= 0);
  console.log(result2);
}