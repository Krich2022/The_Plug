const router = require("express").Router();
const { User, Event, EventUser } = require("../../models");

router.get("/rsvp-events", async (req, res) => {
  try {
    const userData = req.session.user_id;
    const rsvpEvents = await EventUser.findAll({
      where: { user_id: userData },
      include: [
        {
          model: Event,
        },
      ],
    });
    res.status(200).json(rsvpEvents);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/users-by-event-id/:id", async (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
    const eventRsvp = await EventUser.findAll({
      where: { event_id: eventId },
      include: { model: User, attributes: ["id", "name"] },
    });
    res.status(200).json(eventRsvp);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/:event_id", async (req, res) => {
  try {
    const user = req.session.user_id;
    const eventsUserData = await EventUser.create({
      user_id: user,
      event_id: req.params.event_id,
    });

    res.status(200).json(eventsUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
