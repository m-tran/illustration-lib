const express = require('express');
const router = express.Router();

const {
	findHeadByKey
} = require("../controllers/imageControllers");

router.get("/head", findHeadByKey);

module.exports = router;