const express = require("express");
const router = express.Router();
const { index, about, contact } = require("../controller/index.js");
router.get("/", index);
router.get("/about", about);
router.get("/contact", contact);

module.exports = router;
