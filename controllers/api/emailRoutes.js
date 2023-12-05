const router = require("express").Router();
const client = require("@sendgrid/mail");
const { SENDGRID_API_KEY, SENDGRID_FROM_EMAIL } = process.env;

router.post("/", async (req, res) => {
  try {
    const { emails, eventName, eventStart, eventEnd, eventUrl } = req.body;

    const data = {
      to: emails,
      from: SENDGRID_FROM_EMAIL,
      subject: `Event Reminder for ${eventName}`,
      html: `This is a reminder for ${eventName}, the event begins at ${eventStart}`,
    };

    if (eventEnd) {
      data.html += ` and goes until ${eventEnd}`;
    }

    data.html += `. If you have any questions, please visit the event page at ${eventUrl}<br><br>-The Plug`;

    client.setApiKey(SENDGRID_API_KEY);
    await client.send(data);

    res.status(200).send("Message sent");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
