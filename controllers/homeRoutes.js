const router = require("express").Router();
const { Event } = require("../models")

router.get("/", async (req, res) => {
  //if (!req.session.user) {
  //  res.redirect('/dashboard');
  //};
  try {
    res.render("login", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get("/signup", async (req, res) => {
  //if (!req.session.user) {
  //  res.redirect('/dashboard');
  //};
  try {
    res.render("signup", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    res.render("dashboard", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/event/*", async (req, res) => {
  try {
    res.render("event", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search", async (req, res) => {
  try {
    res.render("search", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/create", async (req, res) => {
  try {
    res.render("eventform", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
