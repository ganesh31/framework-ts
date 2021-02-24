import { User } from "./models/User";

const user = new User({ name: "myName", age: 28 });

user.on('change', () => console.log("Change #1"))
user.on('change', () => console.log("Change #2"))
user.on('save', () => console.log("Save #1"))

user.trigger('change')
user.trigger('save')