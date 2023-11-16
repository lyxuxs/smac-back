const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: String,
    description: Array,
    date: {
      type: Date,
      default: Date.now,
    },
    image: String,
    author: String,
    category: String,

    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model("News", newsSchema);
  