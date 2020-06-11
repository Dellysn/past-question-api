const path = require("path");
exports.index = (req, res) => {
  // return res.sendFile(path.join(`${__dirname}/../views/index.html`));
  res.json({
    message: "hello world",
  });
};
exports.about = (req, res) => {
  res.json({
    status: 200,
    message: "About route",
  });
};

exports.contact = (req, res) => {
  res.json({
    status: 200,
    message: "contact route",
  });
};
