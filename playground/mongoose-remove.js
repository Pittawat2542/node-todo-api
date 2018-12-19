const { ObjectID } = require("mongodb");

const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

// Todo.remove({}).then(result => console.log(result));

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({ _id: "5c19f23c073216e1bb2660d3" }).then(todo => {
  console.log(todo);
});

Todo.findByIdAndRemove("5c19f23c073216e1bb2660d3").then(todo => {
  console.log(todo);
});
