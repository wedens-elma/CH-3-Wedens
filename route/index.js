const express = require("express");
const router = express.Router();
const carRoute = require("./car");

router.use("/cars", carRoute);

router.use("", (req, res) => {
  res.status(200).json({
    message: "ping successfully",
  });
});

module.exports = router;
