const db = require("./models");
const express = require("express");
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();
app.use(express.json());

app.use("/", schoolRoutes);

db.sequelize
	.sync({ alter: true })
	.then(() => console.log("✅ Database synced"))
	.catch((err) => console.error("❌ DB sync error:", err));

app.listen(3000, () => {
	console.log("🚀 Server running on port 3000");
});
