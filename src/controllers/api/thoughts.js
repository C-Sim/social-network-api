const { Thought } = require("../../models");

const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});

    return res.json({ data: thoughts });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thoughts | ${error.message}`);
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
  }
};

const createThought = () => {};

const updateThought = () => {};

const deleteThought = () => {};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
};
