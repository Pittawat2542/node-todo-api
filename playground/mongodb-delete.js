const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) return console.log("Unable to connect to MongoDB server");

    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    // db.collection("Todos")
    //   .deleteMany({
    //     text: "Eat breakfast"
    //   })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection("Todos")
    //   .deleteOne({
    //     text: "Eat breakfast"
    //   })
    //   .then(result => console.log(result));

    // db.collection("Todos")
    //   .findOneAndDelete({
    //     completed: false
    //   })
    //   .then(result => console.log(result));

    db.collection("Users")
      .deleteMany({
        name: "Pete"
      })
      .then(result => console.log(result));

    db.collection("Users")
      .findOneAndDelete({
        _id: new ObjectID("5c19beba1361f9c454daecdf")
      })
      .then(result => console.log(result));

    // client.close();
  }
);
