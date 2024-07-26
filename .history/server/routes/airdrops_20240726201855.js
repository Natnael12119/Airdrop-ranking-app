const express = require('express');
const router = express.Router();
const Airdrop = require('../models/Airdrop');

// GET /api/airdrops - Fetch all airdrops
router.get('/', async (req, res) => {
	try {
		const airdrops = await Airdrop.find();
		res.json(airdrops);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// POST /api/airdrops - Create a new airdrop
router.post('/', async (req, res) => {
	const airdrop = new Airdrop({
		name: req.body.name,
		description: req.body.description,
		eligibility: req.body.eligibility,
		website: req.body.website,
	});

	try {
		const newAirdrop = await airdrop.save();
		res.status(201).json(newAirdrop);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

module.exports = router;
