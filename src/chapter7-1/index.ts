// import { user1Name, age } from "./user1.js";
// import { getUser1Name } from "./user1.js";
import * as user1 from "./user1.js";
import increment, { value } from "./counter.js";
import user1Age from "./user1Age.js";
import { type Animal, tama } from "./animal.js";

console.log(user1.name, user1.age);
console.log(user1.getUser1Name());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(user1Age);
const myCat: Animal = { ...tama };