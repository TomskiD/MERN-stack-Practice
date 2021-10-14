class MongooseService {
  constructor(Model) {
    this.model = Model;
  }

  create(body) {
    return this.model.create(body);
  }
}

module.exports = MongooseService;
