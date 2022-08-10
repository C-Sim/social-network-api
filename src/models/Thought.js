const { Schema, model } = require("mongoose");

const reactionSchema = require("./Reaction");

const dateFns = require("date-fns");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: dateFns.format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS"),
    // Use a getter method to format the timestamp on query
  },
  username: {
    type: String,
    required: true,
  },

  // Array of nested documents created with the `reactionSchema`
  reactions: [reactionSchema],
};

const schema = new Schema(thoughtSchema, {
  toJSON: {
    virtuals: true,
  },
});

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
schema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", schema);

module.exports = Thought;
