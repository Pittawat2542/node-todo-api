const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) return console.log("Unable to connect to MongoDB server");

    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    db.collection("Todos")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5c19c660086a99d3f0dc0293")
        },
        { $set: { completed: true } },
        {
          returnOriginal: false
        }
      )
      .then(result => console.log(result));

    db.collection("Users")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5c19be27078b31c43d983f7c")
        },
        {
          $set: {
            name: "John"
          },
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => console.log(result));

    // client.close();
  }
);
