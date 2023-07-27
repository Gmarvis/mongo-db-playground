let express = require("express");
let router = express.Router();
const Book = require("../models/book");

// function handlers
const respHandler = (res, cohort) => {
  console.log(cohort);
  return res.json({ status: "ok", cohort });
};


const errorHandler = (res, err) => {
    let errorMsg = "An error has occured" + err;
    console.log(errorMsg);
    return res.json({ stutus: errorMsg }).status(500);
  };

// get all books
router.get("/", (req, res) => {
  res.json(book);
});


// post create book
router.post("/", (req, res) => {
  let book = new Book(req.body.book);
  book
  .save()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler((res, err)));
});

// get book by id
router.get("/:", async (req, res) => {
  let id = req.params.id;
  Book.findById(id)
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

// update book
router.post("/update", async (req, res) => {
  let id = req.params.id;
  let book = req.body.book;
  await Book.findByIdAndUpdate(id, book)
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

// delete book bby id
router.delete("/delete", async (req, res) => {
  let id = req.params.id;
  await Book.findByIdAndDelete(id)
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

module.exports = router;
