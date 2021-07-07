const db = require("../models");

module.exports = {
	findHeadByKey: async (req, res) => {
		try {
			const Image = await db.Image.findOne({
				name: req.query.id,
			});
			res.send(Image.url);
		} catch (error) {
			console.log(`No image found called ${key}'`);
			throw error;
		}
	},
}
