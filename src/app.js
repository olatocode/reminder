const express = require("express");
const mongoose = require("mongoose");
const reminderRouter = require("./routes/reminder.route");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config();
port = process.env.PORT;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
    console.log(`Database Not Connected`);
  }
};
connectDB();

app.use("/api/v1", reminderRouter);

app.listen(port, () => {
  console.log(`RDJ is listening on port ${port}`);
});
