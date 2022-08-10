const { Thought } = require("../../models");

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

const createThought = () => {
  // get all thought fields from payload
  // get user id from payload
  // create thought and get id of new thought
  // find user by user id
  // push thought id to thoughts
  // return res
};

const updateThought = () => {};

const deleteThought = () => {};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
};
