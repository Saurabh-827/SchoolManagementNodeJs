const express = require("express");
const { addSchool, listSchools } = require("../controllers/schoolControllers");

const router = express.Router();

router.post("/addSchool", addSchool);
router.get("/listSchools", listSchools);

module.exports = router;
