const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const router = require("express").Router();
const { Event } = require("../../models");

router.get("/:search", async (req, res) => {
    var searchTerm =  '%'+req.params.search+'%'
    console.log("search",req.params.search)
    Event.findAll({
        where: {
            [Op.or]: {
                event_name: { [Op.like]: searchTerm},
                event_desc: { [Op.like]: searchTerm}
            }
        }
       // where:{event_name:{[Op.like]:'%Art%'}}
       
    }).then(eventsData => {
        const events = eventsData.map((eventsData) => eventsData.get({ plain: true }));
        console.log(eventsData, "Search result",events)
       res.status(200).json(events); 
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router;
