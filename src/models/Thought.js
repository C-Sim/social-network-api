const { Schema, model } = require("mongoose");

const reactionSchema = require("./Reaction");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Set default value to the current timestamp
    // Use a getter method to format the timestamp on query
  },
  username: {
    type: String,
    required: true,
  },
  reactions: {
    // Array of nested documents created with the `reactionSchema`
    reactions: reactionSchema,
  },
};

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const schema = new Schema(thoughtSchema);

const Thought = model("Thought", schema);

module.exports = Thought;
