{
  type Family<Parent extends HasName, Child extends HasName> = {
    mother: Parent;
    father: Parent;
    child: Child;
  }
  // const obj: Family<number, string> = {
  //   mother: 0,
  //   father: 100,
  //   child: "1000",
  // }

  type HasName = {
    name: string;
  }
}