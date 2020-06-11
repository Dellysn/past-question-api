const express = require("express");
const http = require("http");
const port = process.env.PORT || 9000;
const connections = require("./configs/connection");
const bodyParser = require("body-parser");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
// setting up mongodb
connections.mongodb();
// Setup bodyparser
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
// Load routes
const indexroutes = require("./routes/index");
const questionroutes = require("./routes/question");
// use routes
app.use(indexroutes);
app.use(questionroutes);

// Create server
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
