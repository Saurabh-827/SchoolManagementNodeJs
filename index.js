const db = require("./models");
const express = require("express");
require("dotenv").config();
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();
app.use(express.json());

app.use("/", schoolRoutes);

db.sequelize
	.sync({ alter: true })
	.then(() => console.log("✅ Database synced"))
	.catch((err) => console.error("❌ DB sync error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log("🚀 Server running on port 3000");
});
