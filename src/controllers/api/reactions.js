const { Reaction } = require("../../models");

const addReaction = (req, res) => {
  return res.send("addReaction");
};

const removeReaction = () => {};

module.exports = { addReaction, removeReaction };
