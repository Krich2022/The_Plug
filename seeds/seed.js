const fs = require("fs").promises;
const path = require("path");
const sequelize = require("../config/connection");
const { User, Event, EventUser } = require("../models");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const usersData = await fs.readFile(
      path.join(__dirname, "users.json"),
      "utf-8"
    );
    const users = JSON.parse(usersData);

    const createdUsers = await User.bulkCreate(users);

    const eventsData = await fs.readFile(
      path.join(__dirname, "events.json"),
      "utf-8"
    );
    const events = JSON.parse(eventsData);

    const createdEvents = await Event.bulkCreate(events);

    console.log("Seed data successfully created.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await sequelize.close();
  }
};

seedDatabase();
