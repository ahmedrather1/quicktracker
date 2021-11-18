const router = require("express").Router();
let MediaItem = require("../models/mediaItemModel");

router.route("/").get((req, res) => {
  MediaItem.find()
    .then((mediaItems) => res.json(mediaItems))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const date = req.body.date;
  const type = req.body.type;
  // change to int?
  const rating = req.body.rating;

  const newMediaItem = new MediaItem({
    username,
    title,
    type,
    rating,
    date,
  });

  newMediaItem
    .save()
    .then(() => res.json("Media Item  added"))
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
