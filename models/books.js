// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//database structure

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },

  image:
  {
    description: String,
    required: false

  },



});

// const BookSchema = new Schema({
//   title: String,
//   authors: String,
//   description: String,
//   thumbnail: String,
//   purchase: String
// });

// export new Schema

const Book = mongoose.model("books", bookSchema);
module.exports =Book