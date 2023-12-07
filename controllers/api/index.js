const router = require("express").Router();
const userRoutes = require("./userRoutes");
const eventsRoutes = require("./eventsRoutes");
const eventsUsersRoutes = require("./eventsUsersRoutes");
const emailRoutes = require("./emailRoutes");

router.use("/user", userRoutes);
router.use("/events", eventsRoutes);
router.use("/rsvp", eventsUsersRoutes);
router.use("/email", emailRoutes);

module.exports = router;
