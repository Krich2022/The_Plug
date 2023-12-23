const router = require("express").Router();
const SibApiV3Sdk = require("sib-api-v3-sdk");
const { SENDBLUE_API_KEY, SENDBLUE_FROM_EMAIL } = process.env;

router.post("/", async (req, res) => {
  try {
    const { emails, eventName, eventStart, eventEnd, eventUrl } = req.body;
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey = SENDBLUE_API_KEY;

    const apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
    const emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

    emailCampaigns.name = "Campaign sent via the API";
    emailCampaigns.subject = `RSVP Reminder for ${eventName}`;
    emailCampaigns.sender = {
      name: "The Plug",
      email: SENDBLUE_FROM_EMAIL,
    };
    emailCampaigns.type = "classic";

    emailCampaigns.htmlContent = `This is a reminder for ${eventName}, the event begins at ${eventStart} and ends at ${eventEnd}. If you have any questions, please visit the event page at ${eventUrl}<br><br>-The Plug`;

    emailCampaigns.recipients = {
      listIds: [2],
    };

    await apiInstance.createEmailCampaign(emailCampaigns);

    console.log("Email campaign created successfully");

    res.status(200).send("Message sent");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
