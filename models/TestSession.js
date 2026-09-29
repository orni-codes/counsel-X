const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  userId: String,
  scores: Object,
  answered: Array,
  pools: Object,
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model("TestSession", sessionSchema);