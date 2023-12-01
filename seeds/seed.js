const sequelize = require("../config/connection");
const { User, Event, EventUser } = require("../models");

const userData = require("./userData.json");
const events = require("./events.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Event.bulkCreate(events, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
