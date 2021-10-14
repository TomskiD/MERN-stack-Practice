const express = require("express");
const { getEvent, createEvent } = require("../event/event.controller");

const router = express.Router();

router.get("/", getEvent);
router.post("/", createEvent);

module.exports = router;
