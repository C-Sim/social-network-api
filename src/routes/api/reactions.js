const { Router } = require("express");

const {
  addReaction,
  removeReaction,
} = require("../../controllers/api/reactions");

const router = Router({ mergeParams: true });

router.post("/", addReaction);
router.delete("/:reactionId", removeReaction);

module.exports = router;
