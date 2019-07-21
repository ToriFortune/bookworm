const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
router.route("/")
  .get(bookController.findBooks)
  .post(bookController.addBook);

// Matches with "/api/books/:id"
router
  .route("/:id")
  // .get(bookController.findById)
  // .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
