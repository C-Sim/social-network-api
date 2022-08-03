const { Router } = require("express");

const {
  addReaction,
  removeReaction,
} = require("../../controllers/api/reactions");

const router = Router();

router.post("/", addReaction);
router.delete("/:id", removeReaction);

module.exports = router;
