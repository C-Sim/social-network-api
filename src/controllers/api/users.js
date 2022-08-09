const { User } = require("../../models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    return res.json({ data: users });
  } catch (error) {
    console.log(`[ERROR]: Failed to get users | ${error.message}`);
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
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    const user = await User.findOne({ where: { username } });

    if (user) {
      console.log(
        `[ERROR]: Failed to create user | User of ${username} already exists`
      );

      return res.status(400).json({
        error: `Failed to create user | User of ${username} already exists`,
      });
    }

    const newUser = await User.create({
      username,
      email,
    });

    return res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to create user | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to create user",
    });
  }
};

const updateUser = () => {};

const deleteUser = () => {};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
