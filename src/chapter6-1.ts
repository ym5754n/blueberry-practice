{
  // 6.1.1-2
  {
    type Animal = {
      species: string;
      age: string;
    }
    type Human = {
      name: string;
      age: number;
    }
    type User = Animal | Human;

    const tama: User = {
      species: "Felis silvestris catus",
      age: "17",
    }
    const human: User = {
      name: "humnan",
      age: 20,
    }
    // const book: User = {
    //   title: "Software Design",
    // }
    // const getName = (user: User) => user.name;

    type MysteryFunc =
      | ((str: string) => string)
      | ((str: string) => number);
    function useFunc(func: MysteryFunc) {
      const result = func("user");
      console.log(result);
    }
  }
  // 6.1.3
  {
    type Animal = {
      species: string;
      age: number;
    }
    type Human = Animal & {
      name: string;
    }
    const tama: Animal = {
      species: "Felis silvestris catus",
      age: 3,
    }
    const human: Human = {
      species: "Home sapiens sapiens",
      age: 20,
      name: "user",
    }
    // 6.1.4
    {
      type Human = { name: string };
      type Animal = { species: string };
      const getName = (human: Human) => human.name;
      const getSpecies = (animal: Animal) => animal.species;
      const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;
      const user: Human & Animal = {
        name: "user",
        species: "Homo sapiens sapiens",
      };
      const value = mysteryFunc(user);
      console.log(value);
    }
  }
}