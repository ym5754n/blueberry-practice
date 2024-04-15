{
  // 6.4.1
  {
    type Human = {
      type: "human";
      name: string;
      age: bigint;
    }
    const setAge = (human: Human, age: Human["age"]) => {
      return {
        ...human,
        age,
      }
    }
    const user1: Human = {
      type: "human",
      name: "user1",
      age: 24n,
    }
    const user2 = setAge(user1, 10n);
    console.log(user2);
  }
  // 6.4.2
  {
    type Human = {
      name: string;
      age: number;
    }
    type HumanKeys = keyof Human;
    let key: HumanKeys = "name";
    key = "age";
    // key = "hoge";

    const mmConversionTable = {
      mm: 1,
      cm: 10,
      m: 1e3,
      km: 1e6,
    }
    const convertUnits = (value: number, unit: keyof typeof mmConversionTable) => {
      const mmValue = value * mmConversionTable[unit];
      return {
        mm: mmValue,
        m: mmValue / 1e3,
        km: mmValue / 1e6,
      }
    }
    console.log(convertUnits(5600, "cm"));
  }
  // 6.4.3
  {
    const get = <T, K extends keyof T>(obj: T, key: K): T[K] => {
      return obj[key];
    }
    type Human = {
      name: string;
      age: number;
    }
    const user1: Human = {
      name: "user1",
      age: 20,
    }
    const user1Name = get(user1, "name");
    const user1Age = get(user1, "age");
  }
}