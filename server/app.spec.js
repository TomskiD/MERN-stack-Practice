const request = require("supertest");
const app = require("./app");

describe("POST /events", () => {
  describe("given a first name, last name, email", () => {
    test("should respond with a 201 status code", async () => {
      await request(app)
        .post("/events")
        .send({
          firstName: "first name",
          lastName: "last name",
          email: "email",
        })
        .expect(201);
    });
    test("should specify json in the content type header", async () => {
      await request(app)
        .post("/events")
        .send({
          firstName: "first name",
          lastName: "last name",
          email: "email",
        })
        .expect("Content-Type", /json/);
    });
  });
});
