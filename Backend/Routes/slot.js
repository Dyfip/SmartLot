const express = require("express");
const { getSlots, bookSlot } = require("../Controllers/slotController");
const router = express.Router();

router.get("/", getSlots);
router.post("/book", bookSlot);

module.exports = router;
