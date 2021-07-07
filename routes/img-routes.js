const express = require('express');
const router = express.Router();

const {
	findHeadByKey,
	findBodyByKey,
	findBottomByKey,
} = require("../controllers/imageControllers");

router.get("/head", findHeadByKey);

router.get("/body", findBodyByKey);

router.get("/bottom", findBottomByKey);

module.exports = router;