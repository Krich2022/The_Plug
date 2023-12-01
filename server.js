const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const { check, validationResult } = require('express-validator');

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

app.get('/create-event', function (req, res) {
  res.render('eventForm');
});

// this will handle the form submission

app.post('/create-event', [
  // Check if 'name' is not empty
  check('name').not().isEmpty().withMessage('Name is required'),
  // Check if 'date' is a valid date
  check('date').isDate().withMessage('Date is not valid'),
  // Add more checks as needed
], function (req, res) {
  // Handle the form submission
});
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
