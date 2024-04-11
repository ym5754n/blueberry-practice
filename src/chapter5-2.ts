{
  // 5.2.2
  class User {
    name: string = "";
    age: number = 0;
  }
  type MyUserConstructor = new () => User;

  const MyUser: MyUserConstructor = User;
  const u = new MyUser();
  console.log(u.name, u.age);

  type HasAge = {
    age: number;
  }
  class User2 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  function getPrice(customer: HasAge) {
    if (customer instanceof User2) {
      if (customer.name === "freeUser") {
        return 0;
      }
    }
    return customer.age >= 20 ? 1000 : 500;
  }
  console.log(getPrice({ age: 10 }));
  console.log(getPrice({ age: 100 }));
  console.log(getPrice(new User2("freeUser", 10)));
}