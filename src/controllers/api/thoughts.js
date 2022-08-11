const { Thought, User } = require("../../models");

const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});

    return res.json({ data: thoughts });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thoughts | ${error.message}`);

    return res.status(500).json({
      success: false,
      error: "Failed to get thoughts",
    });
  }
};

const getThoughtById = async (req, res) => {
  try {
    const { id } = req.params;

    const thought = await Thought.findById(id);

    if (!thought) {
      return res
        .status(404)
        .json({ success: false, message: "No thought found" });
    }

    return res.json({ data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thought | ${error.message}`);

    return res.status(500).json({
      success: false,
      error: "Failed to get thought",
    });
  }
};

const createThought = async (req, res) => {
  // get all thought fields from payload
  // get user id from payload
  // create thought and get id of new thought
  // find user by user id
  // push thought id to thoughts
  // return res
  try {
    const { thoughtText, username, userId } = req.body;

    const thought = await Thought.findOne({ thoughtText });

    const user = await User.findOne({ userId });

    if (thought) {
      console.log(
        `[ERROR]: Failed to create thought | Thought of ${thoughtText} already exists`
      );

      return res.status(400).json({
        error: `Failed to create thought | Thought of ${thoughtText} already exists`,
      });
    }

    const newThought = await Thought.create({
      thoughtText,
      username,
      userId,
    });

    const thoughtId = newThought.id;

    user.thoughts.push(thoughtId);

    return res.status(201).json({
      success: true,
      data: newThought,
      user,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to create thought | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to create thought",
    });
  }
};

const updateThought = async (req, res) => {
  try {
    const { thoughtText } = req.body;
    const { id } = req.params;

    const updatedThought = await Thought.findByIdAndUpdate(
      id,
      { thoughtText },
      { new: true }
    );

    if (!updatedThought) {
      console.log(
        `[ERROR]: Failed to find thought | No thought with id of ${id}`
      );

      return res.status(404).json({ error: "Failed to find thought" });
    }

    return res.json({
      success: true,
      data: updatedThought,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to update thought | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to update thought",
    });
  }
};

const deleteThought = async (req, res) => {
  try {
    const { id } = req.params;

    const thought = await Thought.findByIdAndRemove(id);

    if (!thought) {
      console.log(
        `[ERROR]: Failed to find thought | No thought with id of ${id}`
      );

      return res.status(404).json({ error: "Failed to find thought" });
    }

    return res.json({
      success: true,
      message: "Successfully deleted thought",
    });
  } catch (error) {
    console.log(`[ERROR: Failed to delete thought | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to delete thought",
    });
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
};
