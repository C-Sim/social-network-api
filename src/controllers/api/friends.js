const { User } = require("../../models");

const addFriend = async (req, res) => {
  try {
    const friendId = req.body;
    const { userId } = req.params;

    console.log(friendId);
    console.log(userId);

    const user = await User.findOne(userId);

    console.log(user);

    if (friendId) {
      const friend = await User.findByIdAndUpdate(
        userId,
        {
          $push: { friends: friendId },
        },
        { returnDocument: "after" }
      );

      return res.status(201).json({
        success: true,
        data: friend,
      });
    }

    return res.status(400).json({
      success: false,
      error: "Please enter the user ID for the friend.",
    });
  } catch (error) {
    console.log(`[ERROR: Failed to add friend | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to add friend",
    });
  }
};

const removeFriend = async (req, res) => {
  try {
    const { userId, friendId } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $pull: { friends: { friendId } },
      },
      { returnDocument: "after" }
    );
    return res.status(201).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to delete friend | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to delete friend",
    });
  }
};

module.exports = { addFriend, removeFriend };
