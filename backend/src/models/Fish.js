const mongoose = require("mongoose");

const fishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  scientificName: {
    type: String
  },

  description: {
    type: String
  },

  imageUrl: {
    type: String
  },

  phMin: Number,
  phMax: Number,

  tempMin: Number,
  tempMax: Number,

  tdsMin: Number,
  tdsMax: Number,

  turbidityMin: Number,
  turbidityMax: Number
});

module.exports = mongoose.model("Fish", fishSchema);