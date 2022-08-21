const { Router } = require("express");

const reactions = require("./reactions");

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/api/thoughts");

const router = Router();

router.get("/", getAllThoughts);
router.get("/:id", getThoughtById);
router.post("/", createThought);
router.put("/:id", updateThought);
router.delete("/:id", deleteThought);

router.use("/:thoughtId/reactions", reactions);

module.exports = router;
