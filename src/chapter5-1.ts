{
  // 5.1.1
  // const User = class {
  class User {
    static adminName: string = "admin";
    static getAdminUser() {
      return new User(User.adminName, 50);
    }

    public name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }

    // constructor(private name: string, private age: number) {}

    public getAge(): number {
      return this.#age;
    }
    public setAge(newAge: number) {
      this.#age = newAge;
    }

    public isAdult(): boolean {
      return this.#age >= 20;
    }
  }
  const person = new User("person", 10);
  console.log(person.name);
  console.log(person.getAge());
  person.setAge(100);
  console.log(person.getAge());

  const person2 = new User("person2", 0);
  console.log(person2.isAdult());
  person2.setAge(100);
  console.log(person2.isAdult());

  console.log(User.adminName);
  const admin = User.getAdminUser();
  console.log(admin.name);
  console.log(admin.getAge());

  // 5.1.10
  console.log("hello");
  class C {
    static {
      console.log("my");
    }
  }
  console.log("world");

  class User2 {
    static adminUser: User2;
    static {
      this.adminUser = new User2();
      this.adminUser.#age = 9999;
    }

    #age: number = 0;
    getAge() {
      return this.#age;
    }
    setAge(age: number) {
      if (age < 0 || age > 150) {
        return;
      }
      this.#age = age;
    }
  }
  console.log(User2.adminUser.getAge());

  class User3<T> {
    name: string;
    #age: number;
    readonly data: T;

    constructor(name: string, age: number, data: T) {
      this.name = name;
      this.#age = age;
      this.data = data;
    }

    public isAdult(): boolean {
      return this.#age >= 20;
    }
  }
  const person3 = new User3<string>("person3", 40, "additional data");
  const data = person3.data;
  const person4 = new User3("person4", 10, { num: 123 });
  const data2 = person4.data;
}