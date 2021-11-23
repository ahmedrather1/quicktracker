const router = require("express").Router();
let User = require("../models/userModel");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;

  const newUser = new User({ username, email });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error " + err));
});

// get by id
router.route("/:emailaddr").get((req, res) => {
  User.find({ email: req.params.emailaddr })
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
