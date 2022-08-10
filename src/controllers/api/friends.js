const { User } = require("../../models");

const addFriend = (req, res) => {
  // get friend id from payload

  // find user by user id

  // update user by pushing friendid to array
  return res.send("addFriend");
};

const removeFriend = () => {};

module.exports = { addFriend, removeFriend };
