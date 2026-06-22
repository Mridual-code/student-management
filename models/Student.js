const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  age: Number,

  course: String,

  email: {
    type: String,
    required: true
  },

  marks: {
    type: Number,
    default: 0
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;