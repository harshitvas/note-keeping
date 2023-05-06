const express = require("express");
const {
  getNoteById,
  getNotes,
  CreateNote,
  DeleteNote,
  UpdateNote,
} = require("../controllers/noteController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getNotes);
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote);
router.route("/create").post(protect, CreateNote);

export default router;
