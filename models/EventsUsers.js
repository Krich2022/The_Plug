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
    freezeTableName: true,
    underscored: true,
    modelName: "eventUser",
  }
);

module.exports = EventUser;
