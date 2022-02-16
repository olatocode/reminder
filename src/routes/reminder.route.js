const express = require("express");
const Reminder = require("../controllers/reminder.controller");
const router = express.Router();

// route paths are in string e.g "/newReminder".

router.post("/newReminder", Reminder.addReminder);

router.get("/viewReminder", Reminder.fetchAllReminder);

router.get("/getSingleReminder", Reminder.fetchAReminder);

router.delete("/removeReminder/:_id", Reminder.deleteAReminder);

router.patch("/updateSingleReminder/:_id", Reminder.updateAReminder);

router.put("/updateAllReminder/:_id", Reminder.updateMoreReminder);

module.exports = router;
