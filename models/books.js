// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//database structure
const BookSchema = new Schema({
  title: String,
  authors: String,
  description: String,
  thumbnail: String,
  purchase: String
});

// export new Schema
module.exports = mongoose.model("googlebooks",BookSchema);
