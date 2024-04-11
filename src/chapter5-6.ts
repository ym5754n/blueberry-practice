{
  // type User = {
  //   name: string;
  //   age: number;
  // }

  // function createUser(name: string, age: number): User {
  //   if (name === "") {
  //     throw new Error("名前は空にできません");
  //   }
  //   return {
  //     name,
  //     age
  //   };
  // }

  // function getMessage(user: User, message: string): string {
  //   return `${user.name} (${user.age}) 「${message}」`;
  // }

  // 5.6.1
  {
    // answer
    // class User {
    //   #name: string;
    //   #age: number;

    //   constructor(name: string, age: number) {
    //     this.#name = name;
    //     this.#age = age;
    //   }

    //   public getMessage = (message: string) => (
    //     `${this.#name} (${this.#age}) 「${message}」`
    //   );
    // }

    // solution
    class User {
      readonly #name: string;
      readonly #age: number;

      constructor(name: string, age: number) {
        if (name === "") {
          throw new Error("nameは空にできません");
        }
        this.#name = name;
        this.#age = age;
      }

      public getMessage = (message: string) => `${this.#name} (${this.#age}) 「${message}」`;
    }

    const user1 = new User("user1", 20);
    console.log(user1.getMessage("こんにちは"));
  }
  // 5.6.3
  {
    const createUser = (name: string, age: number) => {
      return (message: string) => `${name} (${age}) 「${message}」`;
    };
    const getMessage = createUser("user2", 20);
    console.log(getMessage("こんにちは"));
  }
}