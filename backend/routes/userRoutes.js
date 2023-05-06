const express = require("express");
const {
  authUser,
  registerUser,
  updateUserProfile,
} = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
