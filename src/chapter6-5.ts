{
  // 6.5.1
  type Animal = {
    tag: "animal";
    species: string;
  }
  type Human = {
    tag: "human";
    name: string;
  }
  type User = Animal | Human;
  const getNamesIfAllHuman = (users: readonly User[]): string[] | undefined => {
    if (users.every(user => user.tag === "human")) {
      return (users as Human[]).map(user => user.name);
    }
    return undefined;
  }
  // 6.5.2
  const names1 = ["user1", "user2", "user3"];
  const names2 = ["user1", "user2", "user3"] as const;
  type Name = (typeof names2)[number];
}