const router = require("express").Router();
let MediaItem = require("../models/mediaItemModel");

// maybe do update functionality if time

// basic get
router.route("/").get((req, res) => {
  MediaItem.find()
    .then((mediaItems) => res.json(mediaItems))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get all shows
router.route("/shows").get((req, res) => {
  MediaItem.find({ type: "show" })
    .then((mediaItems) => res.json(mediaItems))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get all books
router.route("/books").get((req, res) => {
  MediaItem.find({ type: "book" })
    .then((mediaItems) => res.json(mediaItems))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get all songs
router.route("/songs").get((req, res) => {
  MediaItem.find({ type: "song" })
    .then((mediaItems) => res.json(mediaItems))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get by id
router.route("/:id").get((req, res) => {
  MediaItem.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

// basic post
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const date = Date.parse(req.body.date);
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
    .then(() => res.json(newMediaItem))
    .catch((err) => res.status(400).json("Error " + err));
});

// basic delete
router.route("/:id").delete((req, res) => {
  MediaItem.findByIdAndDelete(req.params.id)
    .then(() => res.json("Item deleted"))
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
