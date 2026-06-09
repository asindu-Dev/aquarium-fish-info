const express = require("express");
const router = express.Router();
const Fish = require("../models/Fish");

// GET all fish
router.get("/", async (req, res) => {
  try {
    const fish = await Fish.find();
    res.json(fish);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET fish by id
router.get("/:id", async (req, res) => {
  try {
    const fish = await Fish.findById(req.params.id);
    if (!fish) return res.status(404).json({ message: "Not found" });
    res.json(fish);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// SEARCH fish
router.get("/search/:name", async (req, res) => {
  try {
    const fish = await Fish.find({
      name: { $regex: req.params.name, $options: "i" },
    });
    res.json(fish);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;