const express = require("express");
const router = express.Router();
const { upload } = require("../configs/multer");
const {
  getquestions,
  getquestionsbyparams,
  schools,
  departments,

  addquestions,
} = require("../controller/question");
router.get("/schools", schools);
router.get("/schools/departments", departments);
router.get("/schools/departments/questions", getquestions);
router.get("/schools/departments/questions/:query", getquestionsbyparams);
router.post(
  "/schools/departments/questions",
  upload.single("course_image"),
  addquestions
);
module.exports = router;
