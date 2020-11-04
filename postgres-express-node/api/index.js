const express = require("express");
const router = express.Router();

const hello = require("./routes/hello");
const login = require("./routes/login");
const medicalTest = require("./routes/medical-test");
const user = require("./routes/user");

module.exports = () => {
  hello(router);
  login(router);
  user(router);
  medicalTest(router);

  return router;
};
