const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: String,
	url: String,
});

const Image = mongoose.model("Image", schema);

Image.insertMany([
	{
		name: 'bobWavy',
		url: 'wavy-bob.png',
	},
	{
		name: 'sidePart',
		url: 'side-part-01.png',
	},
	{
		name: 'afro',
		url: 'afro.png',
	},
	{
		name: 'bald',
		url: 'bald.png',
	},
	{
		name: 'turbanOne',
		url: 'turban_01.png',
	},
	{
		name: 'turbanTwo',
		url: 'turban_02.png',
	}
]);

module.exports = Image;