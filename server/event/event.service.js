const MongooseService = require("./mongoose.service");
const EventModel = require("./event.entity");

class EventService {
  constructor() {
    this.MongooseServiceInstance = new MongooseService(EventModel);
  }

  async create(eventToCreate) {
    try {
      const result = await this.MongooseServiceInstance.create(eventToCreate);
      result.save();
      return { success: true, body: result };
    } catch (err) {
      return { success: false, error: err };
    }
  }
}

module.exports = EventService;
