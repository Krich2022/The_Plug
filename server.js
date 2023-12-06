const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const Event = require("./models/Event"); // Import your Event model

const { check, validationResult } = require("express-validator");

const sequelize = require("./config/connection");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// turn on routes for event form

app.get("/create-event", function (req, res) {
  res.render("eventForm");
});
// // this can be used to upload files
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

// this will handle the form submission

app.post(
  "/create-event",
  [
    // validation rules
    check("eventName", "Event Name is required").not().isEmpty(),
    check("eventDate", "Event Date is not valid").isDate(),
    check("location", "Location is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
  ],
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("eventForm", {
        errors: errors.array(),
        formData: req.body,
      });
    }

    // If there were no validation errors, continue with handling the form submission
  }
);
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
