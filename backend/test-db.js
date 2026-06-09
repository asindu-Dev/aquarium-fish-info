// test-db.js
require("dotenv").config();
const mongoose = require("mongoose");

console.log("URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("CONNECTED"))
  .catch(err => console.log("ERROR:", err.message));