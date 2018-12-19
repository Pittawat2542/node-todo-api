const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// const id = "5c19df9fb457bed744f0e895_";

// if (!ObjectID.isValid(id)) {
//     console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) return console.log("ID not found");
//     console.log("Todo By Id", todo);
//   })
//   .catch(err => console.log(err));

User.findById("5c19d218e562face3e3c1383").then(
  res => {
    if (!res) return console.log("Unable to find user");
    console.log(JSON.stringify(res, undefined, 2));
  },
  err => console.log(err)
);
