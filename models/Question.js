const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schoolSchema = new Schema({
  school_name: { type: String },
  location: { type: String },
  faculty: { type: String },
  department: { type: String },
  level: { type: String },
  question: [
    {
      course_title: { type: String },
      course_image: { type: String },
      course_image_id: { type: String },
      semester: { type: String },
      year: { type: String },
      range: { type: String, default: "2014 - Till date" },
    },
  ],
  dateUploaded: { type: Date, default: Date.now() },
});
let Questions = mongoose.model("Question", schoolSchema);
module.exports = Questions;
