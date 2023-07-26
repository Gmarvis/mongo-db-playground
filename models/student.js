const mongoose = require("../db");
// here we define our Schema, here schemas are like models in sequelize

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: String,
  phone: { type: String, required: true },
  email: { type: String, required: true },
  sex: String,
  level: String,
  address: String,
  town: String,
  region: String,
  country: String,
  score: Number,
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
