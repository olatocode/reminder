const Reminder = require("../models/reminder.model");

exports.addReminder = async (req, res, next) => {
  try {
    const { user, description } = req.body;
    if (!user || !description) {
      return res.status(401).json({
        message: "Please fill in the required fields",
      });
    }
    const new_reminder = await Reminder.create({ user, description });
    return res.status(201).json({
      new_reminder,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.fetchAllReminder = async (req, res, next) => {
  try {
    const { query_user } = req.query;
    const getAll = await Reminder.find({ user: query_user });
    return res.status(200).json({
      getAll,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.fetchAReminder = async (req, res, next) => {
  try {
    const { des } = req.query;
    const getOne = await Reminder.findOne({ description: des });
    if (!getOne) {
      return res.status(404).json({
        message: "ID not found",
      });
    }
    return res.status(200).json({
      getOne,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteAReminder = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const deleteOne = await Reminder.findByIdAndDelete({ _id: _id });
    if (!deleteOne) {
      return res.status(405).json({
        message: "does not allow deleting or modifying",
      });
    }
    return res.status(200).json({
      deleteOne,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateAReminder = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const updateOne = await Reminder.findByIdAndUpdate({ _id: _id }, req.body, {
      new: true,
    });
    if (!updateOne) {
      return res.status(405).json({
        message: "does not allow deleting or modifying",
      });
    }
    return res.status(200).json({
      updateOne,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateMoreReminder = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const updateAll = await Reminder.findByIdAndUpdate({ _id: _id });
    if (!updateAll) {
      return res.status(405).json({
        message: "does not allow deleting or modifying",
      });
    }
    return res.status(200).json({
      updateAll,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
