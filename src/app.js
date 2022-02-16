const express = require("express");
const reminderRouter = require("./routes/reminder.route");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config();
const { PORT } = process.env;

// require DB connection
const { connectDB } = require("./DB/connectDB");
connectDB();

// base url endpoint for reminder
app.use("/api/v1", reminderRouter);

// server connection
app.listen(PORT, () => {
  console.log(`RDJ is listening on port ${PORT}`);
});
