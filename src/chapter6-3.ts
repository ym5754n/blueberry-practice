{
  // 6.3.1
  type SignType = "plus" | "minus";
  const signNumber = (type: SignType) => type === "plus" ? 1 : -1;
  const numberWithSign = (num: number, type: SignType | "none") => {
    if (type === "none") {
      return 0;
    } else {
      return num * signNumber(type);
    }
  }
  console.log(numberWithSign(5, "plus"));
  console.log(numberWithSign(5, "minus"));
  console.log(numberWithSign(5, "none"));
  const numberWithSign2 = (num: number, type: SignType | "none") => {
    if (type === "none") return 0;
    return num * signNumber(type);
  }
  const numberWithSign3 = (num: number, type: SignType | "none") => type === "none" ? 0 : num * signNumber(type);
  console.log(numberWithSign2(5, "plus"));
  console.log(numberWithSign3(5, "minus"));
  // 6.3.2
  const formatNumberOrString = (value: string | number) => {
    if (typeof value === "number") {
      return value.toFixed(3);
    } else {
      return value;
    }
  }
  console.log(formatNumberOrString(3.14));
  console.log(formatNumberOrString("user"));
  // 6.3.3
  {
    type Animal = {
      tag: "animal";
      species: string;
    }
    type Human = {
      tag: "human";
      name: string;
    }
    type User = Animal | Human;
    const getUserName = (user: User) => {
      if (user.tag === "human") {
        return user.name;
      } else {
        return "no name";
      }
    }
    const tama: User = {
      tag: "animal",
      species: "Felis slivestris catus"
    }
    const user1: User = {
      tag: "human",
      name: "user1",
    }
    console.log(getUserName(tama));
    console.log(getUserName(user1));
  }
}