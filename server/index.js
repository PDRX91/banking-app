const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const cors = require("cors");
const apiRoutes = require("./routes/api");

var whitelist = ["http://localhost:3000"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Then pass them to cors:
app.use(cors(corsOptions));
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
