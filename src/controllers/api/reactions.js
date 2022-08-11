const { Thought } = require("../../models");

const addReaction = async (req, res) => {
  try {
    const reactionBody = req.body;

    const { thoughtId } = req.params;

    console.log(reactionBody);
    console.log(thoughtId);

    if (reactionBody) {
      const reaction = await Thought.findByIdAndUpdate(
        thoughtId,
        {
          $push: { reactions: reactionBody },
        },
        { returnDocument: "after" }
      );

      return res.status(201).json({
        success: true,
        data: reaction,
      });
    }

    return res.status(400).json({
      success: false,
      error: "Please provide the reaction text and username.",
    });
  } catch (error) {
    console.log(`[ERROR: Failed to create reaction | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to create reaction",
    });
  }
};

const removeReaction = async (req, res) => {
  try {
    const { thoughtId, reactionId } = req.params;

    console.log(thoughtId);
    console.log(reactionId);

    const updatedThought = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $pull: { reactions: { reactionId } },
      },
      { returnDocument: "after" }
    );
    return res.status(201).json({
      success: true,
      data: updatedThought,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to delete reaction | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to delete reaction",
    });
  }
};

module.exports = { addReaction, removeReaction };
