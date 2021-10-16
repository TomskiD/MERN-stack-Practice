const EventService = require("./event.service");

describe("Post Service", () => {
  const EventServiceInstance = new EventService();

  describe("Create instance of service", () => {
    test("Is not null", () => {
      expect(EventServiceInstance).not.toBe(null);
    });

    test("Exposes the createPost method", () => {
      expect(typeof EventServiceInstance.create).toBe("function");
    });
  });
});
