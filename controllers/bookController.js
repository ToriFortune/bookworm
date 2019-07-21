const db = require("../models");

// controller methods
module.exports = {
  findBook: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(bookData => res.json(bookData))
      .catch(err => res.status(422).json(err));
  },
  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(bookData => res.json(bookData))
  //     .catch(err => res.status(422).json(err));
  // },
  addBook: function(req, res) {
    db.Book
      .addBook(req.body)
      .then(bookData => res.json(bookData))
      .catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(bookData => res.json(bookData))
  //     .catch(err => res.status(422).json(err));
  // },
  removeBook: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(bookData => bookData.remove())
      .then(bookData => res.json(bookData))
      .catch(err => res.status(422).json(err));
  }
};





















