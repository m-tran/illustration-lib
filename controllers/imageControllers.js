const db = require("../models");

module.exports = {
	findHeadByKey: async (req, res) => {
		try {
			const Head = await db.Head.findOne({
				name: req.query.id,
			});
			res.send(Head.url);
		} catch (error) {
			console.log(`No image found called ${key}'`);
			throw error;
		}
	},
	findBodyByKey: async (req, res) => {
		try {
			const Body = await db.Body.findOne({
				name: req.query.id,
			});
			res.send(Body.url);
		} catch (error) {
			console.log(`No image found called ${key}'`);
			throw error;
		}
	},
	findBottomByKey: async (req, res) => {
		try {
			const Bottom = await db.Bottom.findOne({
				name: req.query.id,
			});
			res.send(Bottom.url);
		} catch (error) {
			console.log(`No image found called ${key}'`);
			throw error;
		}
	},
}
