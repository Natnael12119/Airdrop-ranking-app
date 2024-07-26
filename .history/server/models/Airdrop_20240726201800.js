const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AirdropSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	eligibility: { type: String, required: true },
	website: { type: String, required: true },
});

module.exports = mongoose.model('Airdrop', AirdropSchema);
