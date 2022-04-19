const getDb = require("../utils/db").getDb;

exports.getTasks = (req, res) => {
  const db = getDb();
  const query = { userId: 123 };
  db.collection("todos")
    .findOne(query)
    .then((result) => {
      res.json({ tasks: result });
    })
    .catch((err) => console.log(err));
};
