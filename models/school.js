module.exports = (sequelize, DataTypes) => {
	const School = sequelize.define("School", {
		name: { type: DataTypes.STRING, allowNull: false },
		address: { type: DataTypes.STRING, allowNull: false },
		latitude: { type: DataTypes.FLOAT, allowNull: false },
		longitude: { type: DataTypes.FLOAT, allowNull: false },
	});
	return School;
};
