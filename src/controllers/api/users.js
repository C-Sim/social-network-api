const { User } = require("../../models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    return res.json({ data: users });
  } catch (error) {
    console.log(`[ERROR]: Failed to get users | ${error.message}`);

    return res.status(500).json({
      success: false,
      error: "Failed to get users",
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ success: false, message: "No user found" });
    }

    return res.json({ data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to get user | ${error.message}`);

    return res.status(500).json({
      success: false,
      error: "Failed to get user",
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    const user = await User.findOne({ username });

    if (user) {
      console.log(
        `[ERROR]: Failed to create user | User of ${username} already exists`
      );

      return res.status(400).json({
        error: `Failed to create user | User of ${username} already exists`,
      });
    }

    if (username && email) {
      const newUser = await User.create({
        username,
        email,
      });

      return res.status(201).json({
        success: true,
        data: newUser,
      });
    }

    return res.status(400).json({
      success: false,
      error: "Please enter username and email.",
    });
  } catch (error) {
    console.log(`[ERROR: Failed to create user | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to create user",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { username, email },
      { new: true }
    );

    if (!updatedUser) {
      console.log(`[ERROR]: Failed to find user | No user with id of ${id}`);

      return res.status(404).json({ error: "Failed to find user" });
    }

    return res.json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to update user | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to update user",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndRemove(id);

    if (!user) {
      console.log(`[ERROR]: Failed to find user | No user with id of ${id}`);

      return res.status(404).json({ error: "Failed to find user" });
    }

    return res.json({
      success: true,
      message: "Successfully deleted user",
    });
  } catch (error) {
    console.log(`[ERROR: Failed to delete user | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to delete user",
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
