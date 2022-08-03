const { Router } = require("express");

const { addFriend, removeFriend } = require("../../controllers/api/friends");

const router = Router();

router.post("/", addFriend);
router.delete("/:id", removeFriend);

module.exports = router;
