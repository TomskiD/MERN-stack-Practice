const EventService = require("./event.service");
const Event = require("./event.entity");

const eventService = new EventService();

const getEvent = async (req, res) => {
  try {
    const event = await Event.find();
    res.status(200).json(event);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createEvent = async (req, res) => {
  try {
    const eventCreated = await eventService.create(req.body);
    res.status(201).json(eventCreated);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports = {
  getEvent,
  createEvent,
};
