const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: String,
	url: String,
});

const Body = mongoose.model("Body", schema);

Body.insertMany([
	{
		name: 'jacket',
		url: 'jacket.png',
	}
]);

module.exports = Body;