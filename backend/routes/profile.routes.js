const router = require("express").Router();
const protect = require("../middleware/auth.middleware");
const {
  getProfile,
  updateProfile
} = require("../controllers/profile.controller");

router.get("/", protect, getProfile);
router.put("/", protect, updateProfile);

module.exports = router;
