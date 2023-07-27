const mongoose = require("../db");

const Schema = mongoose.Schema;

const cohortSchema = new Schema({
  name: { type: String, required: true },
  startingMonth: { type: String, required: true },
  startingYear: { type: String, required: true },
});

const Cohort = mongoose.model("Cohort", cohortSchema);
module.exports = Cohort;

