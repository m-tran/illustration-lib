const express = require("express");
const Axios = require("axios");
const ImageRouter = express.Router();

//load Image model
const Image = require("../models/Image.js");

ImageRouter.get("/", async(req,res) => {
    res.send("GET request to homepage")
});

module.exports = ImageRouter;