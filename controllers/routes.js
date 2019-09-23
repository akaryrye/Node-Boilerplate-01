var db = require("../models");

module.exports = function(app) {
  // Render index page
  app.get("/", function(req, res) {
    let object = {
      hello: "Hello Boilerplate"
    }
    res.render("index", object);
  });
};