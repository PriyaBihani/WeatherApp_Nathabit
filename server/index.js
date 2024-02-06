require("dotenv").config();
const express = require("express");
const cors = require("cors");
const locationRouter = require("./routes/locations");
const { connectDB } = require("./utils/db");

const app = express();
const port = process.env.PORT || 8000;

connectDB();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/api/locations", locationRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
