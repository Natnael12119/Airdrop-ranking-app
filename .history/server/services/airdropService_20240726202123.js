const fetch = require('node-fetch');
const Airdrop = require('../models/Airdrop');

// Replace 'YOUR_API_KEY' with your actual API key
const API_URL =
	'https://api.mockaroo.com/api/YOUR_API_KEY?count=5&key=YOUR_KEY';

async function fetchAirdropData() {
	try {
		const response = await fetch(API_URL);
		const data = await response.json();

		// Process the data and store it in MongoDB
		data.forEach(async (airdropData) => {
			const airdrop = new Airdrop({
				name: airdropData.name,
				description: airdropData.description,
				eligibility: airdropData.eligibility,
				website: airdropData.website,
			});
			await airdrop.save();
		});

		console.log('Airdrop data successfully fetched and stored.');
	} catch (error) {
		console.error('Error fetching airdrop data:', error);
	}
}

module.exports = {
	fetchAirdropData,
};
