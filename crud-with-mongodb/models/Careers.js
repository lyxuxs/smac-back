const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const careerSchema = new Schema({
    title: String,
    description: String,
    location: String,
    positions: String,
    endDate: String,
    responsibilities: String,
    qualifications: String,

    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model("Careers", careerSchema);
  