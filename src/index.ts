import { User } from "./models/User";

const user = new User({ name: "myName", age: 28 });

user.set({ name: "newName" });

console.log(user.get("name"));
console.log(user.get("age"));
