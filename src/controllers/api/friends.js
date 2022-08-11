const { User } = require("../../models");

const addFriend = async (req, res) => {
  // get friend id from payload

  try {
    const friendId = req.body.id;
    const { userId } = req.params;

    console.log(friendId);
    console.log(userId);

    // find user by user id
    const user = await User.findOne({ userId });

    console.log(user);

    if (user.friends.includes(friendId)) {
      console.log(
        `[ERROR]: Failed to add friend | Friend ID of ${friendId} already exists for user ${userId}`
      );

      return res.status(400).json({
        error: `Failed to add friend | Friend ID of ${friendId} already exists for user ${userId}`,
      });
    }

    // update user by pushing friendid to array
    const [friends] = user.friends.push(friendId);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { friends },
      { new: true }
    );

    return res.status(201).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to add friend | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to add friend",
    });
  }
};

const removeFriend = () => {};

module.exports = { addFriend, removeFriend };
