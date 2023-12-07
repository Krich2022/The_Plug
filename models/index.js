const User = require("./Users");
const Event = require("./Events");
const EventUser = require("./EventsUsers");

User.hasOne(Event, {
  foreignKey: "created_by",
});

Event.belongsTo(User, {
  targetKey: "id",
  foreignKey: "created_by",
});

User.hasMany(EventUser, {
  foreignKey: "user_id",
});

Event.hasOne(EventUser, {
  foreignKey: "event_id",
  targetKey: "id",
});

EventUser.belongsTo(User, {
  targetKey: "id",
  foreignKey: "user_id",
});

EventUser.belongsTo(Event, {
  targetKey: "id",
  foreignKey: "event_id",
});

module.exports = { User, Event, EventUser };
