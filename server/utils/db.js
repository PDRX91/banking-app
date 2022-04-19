const MongoClient = require("mongodb").MongoClient;
let db;
const uri =
  "mongodb+srv://PDRRoot:bDjoyaBVebSGJ628@cluster0.hj0fu.mongodb.net/todosDB?retryWrites=true&w=majority";

const mongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log("db connected!");
      db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (db) {
    return db;
  }
  throw "No db connection";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
