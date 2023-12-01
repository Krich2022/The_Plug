const router = require("express").Router();
const userRoutes = require("./userRoutes");
const eventsRoutes = require("./eventsRoutes");
const eventsUsersRoutes = require("./eventsUsersRoutes");

router.use("/user", userRoutes);
router.use("/events", eventsRoutes);
router.use("/rsvp", eventsUsersRoutes);

module.exports = router;
