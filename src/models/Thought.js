const { Schema, model } = require("mongoose");

const reactionSchema = require("./Reaction");

const formatDate = require("../utils/formatDate");

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
    get: formatDate,
  },
  username: {
    type: String,
    required: true,
  },

  reactions: [reactionSchema],
};

const schema = new Schema(thoughtSchema, {
  toJSON: {
    virtuals: true,
  },
});

schema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", schema);

module.exports = Thought;
