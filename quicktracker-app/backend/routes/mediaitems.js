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

// get all books with specific email
router.route("/books/:email").get((req, res) => {
  MediaItem.find({ type: "book", email: req.params.email })
    .then((mediaItems) => res.json(mediaItems))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get all movies with specific email
router.route("/movies/:email").get((req, res) => {
  MediaItem.find({ type: "movie", email: req.params.email })
    .then((mediaItems) => res.json(mediaItems))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get all shows with specific email
router.route("/shows/:email").get((req, res) => {
  MediaItem.find({ type: "show", email: req.params.email })
    .then((mediaItems) => res.json(mediaItems))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get all songs with specific email
router.route("/songs/:email").get((req, res) => {
  MediaItem.find({ type: "song", email: req.params.email })
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
  const email = req.body.email;
  const title = req.body.title;
  const summary = req.body.summary;
  const date = Date.parse(req.body.date);
  const type = req.body.type;
  // change to int?
  const rating = req.body.rating;

  const newMediaItem = new MediaItem({
    email,
    title,
    type,
    rating,
    summary,
    date,
  });

  newMediaItem
    .save()
    .then(() => res.json(newMediaItem))
    .catch((err) => res.status(400).json("Error " + err));
});

// basic delete
router.route("/:id").delete((req, res) => {
  console.log("trying to delete id ", req.params.id);
  MediaItem.findByIdAndDelete(req.params.id)
    .then(() => res.json("Item deleted"))
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
