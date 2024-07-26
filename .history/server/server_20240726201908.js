const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const airdropRoutes = require('./routes/airdrops');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB connected...'))
	.catch((err) => console.log(err));

// Routes
app.use('/api/airdrops', airdropRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
