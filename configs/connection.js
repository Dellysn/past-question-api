const mongoose = require("mongoose");

function mongodb() {
  const uri = "mongodb://localhost:27017/past-question-api";
  // const uri = "mongodb://dellyson:dellyson1@ds013848.mlab.com:13848/citedel";
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function (done) {
      console.log("MongoDB Connected");
    })
    .catch(function (err) {
      throw new Error(err);
    });
}
module.exports = {
  mongodb,
};
