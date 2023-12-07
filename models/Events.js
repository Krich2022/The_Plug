const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    event_end: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    event_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "event",
  }
);
module.exports = Event;
