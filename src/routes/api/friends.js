const { Router } = require("express");

const { addFriend, removeFriend } = require("../../controllers/api/friends");

const router = Router({ mergeParams: true });

router.post("/", addFriend);
router.delete("/:id", removeFriend);

module.exports = router;
