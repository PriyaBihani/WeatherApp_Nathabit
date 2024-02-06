const express = require("express");
const { body, param } = require("express-validator");
const {
  createLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
  deleteLocation,
} = require("../controllers/locations");
const { validate, validateLocation } = require("../middlewares");

const router = express.Router();

router.post("/", body("name"), validate, validateLocation, createLocation);
// READ
router.get("/", getAllLocations);
// READ ONE
router.get("/:id", param("id").isMongoId(), validate, getLocationById);
// UPDATE
router.put("/:id", param("id").isMongoId(), validate, updateLocation);
// DELETE
router.delete("/:id", param("id").isMongoId(), validate, deleteLocation);

module.exports = router;
