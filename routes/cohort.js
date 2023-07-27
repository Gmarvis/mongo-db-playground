let express = require("express");
let router = express.Router();
const Cohort = require("../models/cohort");

// function handlers
const respHandler = (res, cohort) => {
  console.log(cohort);
  return res.json({ status: "ok", cohort });
};

const errorHandler = (res, err) => {
  let errorMsg = "An error has occured";
  console.log(errorMsg);
  return res.json({ status: errorMsg }).status(500);
};

// Get all cohorts
router.get("/", (req, res) => {
  res.json({ cohort });
});

// post create cohort
router.post("/", (req, res) => {
  let cohort = new Cohort(req.body.cohort);
  cohort
    .save()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

// GEt corhort by id
router.get("/:id", async (req, res) => {
  let id = req.params.id;
  Cohort.findById(id)
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

// Update cohort
router.post("/update", async (req, res) => {
  let id = req.params.id;
  let cohort = req.body.cohort;
  await Cohort.findByIdAndUpdate(id, cohort )
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
});

// delete cohort 
router.delete("/delete", async (req, res)=> {
  let id = req.params.id;
  await Cohort.findByIdAndDelete(id)
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));
})



module.exports = router;
