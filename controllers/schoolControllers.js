const db = require("../models");
const School = db.sequelize.models.School;

// POST /addSchool
exports.addSchool = async (req, res) => {
	const { name, address, latitude, longitude } = req.body;
	if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
		return res.status(400).json({ error: "Invalid input" });
	}

	try {
		const school = await School.create({ name, address, latitude, longitude });
		res.status(201).json(school);
	} catch (err) {
		res.status(500).json({ error: "Failed to add school", error: err.message });
	}
};

// GET /listSchools?latitude=...&longitude=...
exports.listSchools = async (req, res) => {
	const userLat = parseFloat(req.query.latitude);
	const userLong = parseFloat(req.query.longitude);
	if (isNaN(userLat) || isNaN(userLong)) {
		return res.status(400).json({ error: "Invalid coordinates" });
	}

	try {
		const schools = await School.findAll();
		const sorted = schools
			.map((s) => ({
				...s.dataValues,
				distance: Math.sqrt(
					Math.pow(s.latitude - userLat, 2) +
						Math.pow(s.longitude - userLong, 2)
				),
			}))
			.sort((a, b) => a.distance - b.distance);

		res.json(sorted);
	} catch (err) {
		res.status(500).json({ error: "Failed to list schools" });
	}
};
