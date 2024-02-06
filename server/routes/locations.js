const express = require("express");
const Location = require("../models/location");

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    const locationExists = await Location.exists({ name });

    if (locationExists) {
      return res.status(400).json({
        status: "error",
        msg: "Location with this name already exists",
        data: null,
      });
    }

    const location = await Location.create({ name });
    res.json({
      status: "success",
      msg: "Location created successfully",
      data: location,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
    });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const locations = await Location.find();
    res.json({
      status: "success",
      msg: "Location Fetched successfully",
      data: locations,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    res.json({
      status: "success",
      msg: "Location fetched successfully",
      data: location,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      status: "success",
      msg: "Updated successfully",
      data: location,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Location.findByIdAndRemove(req.params.id);
    res.json({ status: "success", message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
