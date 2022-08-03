const { User } = require("../../models");

const addFriend = (req, res) => {
  return res.send("addFriend");
};

const removeFriend = () => {};

module.exports = { addFriend, removeFriend };
