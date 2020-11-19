const path = require("path");

// html routes
module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/advertise", (req, res) => {
    res.render("advertise");
  });
  app.get("/admin", (req, res) => {
    res.render("admin");
  });
};
