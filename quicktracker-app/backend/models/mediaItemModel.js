const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mediaItemSchema = new Schema(
  {
    email: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    rating: { type: Number, required: true },
    summary: { type: String, required: false },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const MediaItem = mongoose.model("MediaItem", mediaItemSchema);

module.exports = MediaItem;
