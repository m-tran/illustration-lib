const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: String,
	url: String,
});

const Bottom = mongoose.model("Bottom", schema);

Bottom.insertMany([
	{
		name: 'pants',
		url: 'pants.png',
	},
	{
		name: 'shorts',
		url: 'shorts.png',
	},
	{
		name: 'miniskirt',
		url: 'miniskirt.png',
	},
	{
		name: 'maxi',
		url: 'maxi.png',
	},
]);

module.exports = Bottom;