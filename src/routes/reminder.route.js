const express = require("express");
const Reminder = require("../controllers/reminder.controller");
const router = express.Router();

// route paths are in string e.g "/newReminder".

router.post("/newReminder", Reminder.addReminder);

router.get("/viewReminder", Reminder.fetchReminders);

router.get("/getSingleReminder", Reminder.fetchById);

router.delete("/removeReminder/:_id", Reminder.deleteById);

router.patch("/updateSingleReminder/:_id", Reminder.updateOne);

router.put("/updateAllReminder/:_id", Reminder.updateMore);

module.exports = router;
