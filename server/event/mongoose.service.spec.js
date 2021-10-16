const MongooseService = require("./event.service");

describe("Mongoose Service", () => {
  const MongooseServiceInstance = new MongooseService();

  describe("Create instance of service", () => {
    test("Is not null", () => {
      expect(MongooseServiceInstance).not.toBe(null);
    });

    test("Exposes the createPost method", () => {
      expect(typeof MongooseServiceInstance.create).toBe("function");
    });
  });
});
