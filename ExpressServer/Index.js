const express = require("express");
const App = express();
const port = 8000;
App.get("/", (req, res) => {
  return res.end("This is the home page");
});
App.get("/about", (req, res) => {
  return res.end(`Hello my name is ${req.query.name}`);
});
App.get("/Contact", (req, res) => {
  return res.end("This is the contact page");
});

App.listen(port, () => {
  console.log(`The Server is running on the port ${port}`);
});
