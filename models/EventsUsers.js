const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class EventUser extends Model {}

EventUser.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "eventsUser",
  }
);

module.exports = EventUser;
