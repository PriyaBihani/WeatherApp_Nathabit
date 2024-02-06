const { validationResult } = require("express-validator");
const axios = require("axios");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: "error",
      msg: "Validation error",
      data: errors.array(),
    });
  }
  next();
};

// If the location exists or not in the weather API
const validateLocation = async (req, res, next) => {
  const { name } = req.body;
  try {
    // Replace with your actual weather API endpoint and API key
    const response = await axios.get(
      `https://api.weatherapi.com/v1/search.json?key=${process.env.WEATHER_API_KEY}&q=${name}`
    );
    if (response.data) {
      console.log(response.data);
      next();
    } else {
      // The place does not exist in the weather API
      res.status(400).json({ msg: "Place does not exist in the weather API" });
    }
  } catch (error) {
    // An error occurred while making the request to the weather API
    console.log(error);
    res.status(500).json({
      msg: "An error occurred while checking the name exists in weather api or not",
    });
  }
};

module.exports = { validate, validateLocation };
