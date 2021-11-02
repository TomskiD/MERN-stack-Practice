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
  const { firstName, lastName, email } = req.body;
  const eventCreated = await eventService.create(req.body);
  if (!firstName || !lastName || !email) {
    return res.sendStatus(400);
  }
  return res.status(201).json(eventCreated);
};

module.exports = {
  getEvent,
  createEvent,
};
