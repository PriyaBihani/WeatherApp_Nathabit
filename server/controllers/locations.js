const Location = require("../models/location");

const createLocation = async (req, res) => {
  try {
    let { name } = req.body;
    name = name.trim();

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
};

const getAllLocations = async (req, res) => {
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
};

const getLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    res.json({
      status: "success",
      msg: "Location fetched successfully",
      data: location,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
    });
  }
};

const updateLocation = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const locationExists = await Location.exists({ _id: id });

    if (!locationExists) {
      return res.status(400).json({
        status: "error",
        msg: "Location with this name does not exist",
        data: null,
      });
    }

    const location = await Location.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.json({
      status: "success",
      msg: "Updated successfully",
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
};

const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("delete");
    await Location.findByIdAndDelete(id);
    res.json({ status: "success", message: "Deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
    });
  }
};

module.exports = {
  createLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
  deleteLocation,
};
