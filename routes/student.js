let express = require("express");
let router = express.Router();
const Student = require("../models/student");

// handler funtion
const respHandler = (res, student) => {
  console.log(student);
  return res.json({ staus: "ok", student});
};

const errorHandler = (res, err) => {
    let errorMsg = "An error has occured" + err
    console.log(errorMsg)
    return res.json({stutus: errorMsg}).status(500)
}

// Get student listing

router.get("/", function (req, res, next) {
  res.send("respond with a respond");
});

/* Post create student */
router.post("/", function (req, res, next) {
  let student = new Student(req.body.student);
  student
    .save()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
  /* res.json({'status': 'ok'})*/
});

// get student by id
router.get("/:id", async function (req, res) {
  let id = req.params.id;
  Student.findById(id);
  exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

module.exports = router;
