const Question = require("../models/Question");
const cloudinary = require("../configs/cloudinary");
exports.schools = (req, res) => {
  res.json({
    status: 200,
    message: "List of Schools route",
  });
};
exports.departments = (req, res) => {
  res.json({
    status: 200,
    message: "List of Departments route",
  });
};

exports.getquestions = (req, res) => {
  Question.find({}).exec((err, docs) => {
    if (err) {
      throw new Error(err);
    }
    docs.map((doc) => {
      res.json({
        status: 200,
        data: [docs],
      });
    });
  });
};
exports.getquestionsbyparams = (req, res) => {
  let condition = {
    faculty: req.params.query,
  };
  console.log("condition: ", condition);
  Question.find(condition).exec((err, docs) => {
    if (err) {
      throw new Error(err);
    }
    console.log(docs);
  });
  // console.log(req.params);
};

exports.addquestions = (req, res) => {
  let newQuestion = {
    school_name: req.body.school_name,
    location: req.body.location,
    faculty: req.body.faculty,
    department: req.body.department,
    level: req.body.level,
    question: [
      {
        course_title: req.body.course_title,
        course_image: req.file.path,
        course_image_id: "",
        semester: req.body.semester,
        year: req.body.year,
      },
    ],
  };

  cloudinary.upload(newQuestion.question[0].course_image).then((result) => {
    if (result) {
      let newQuestion = {
        school_name: req.body.school_name,
        location: req.body.location,
        faculty: req.body.faculty,
        department: req.body.department,
        level: req.body.level,
        question: [
          {
            course_title: req.body.course_title,
            course_image: result.url,
            course_image_id: result.id,
            semester: req.body.semester,
            year: req.body.year,
          },
        ],
      };

      let question = new Question(newQuestion);
      question.save((err, result) => {
        if (err) {
          res.json({
            message: "Error saving question",
            error: err,
          });
        }

        res.json({
          message: "Saved successfully",
          data: [result],
        });
      });
    }
  });
};
