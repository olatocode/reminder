const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  user: {
    type: Number,
    Required: true,
  },

  description: {
    type: String,
    Required: true,
  },
  Date: { type: Date, default: Date.now },
});
const modelReminder = mongoose.model("Reminder", reminderSchema);
module.exports = modelReminder;
