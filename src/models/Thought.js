const { Schema, model } = require("mongoose");

// const reactionSchema = require("./Reaction");

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
    // default: dateFns.format(new Date(Date.now), "dd mmm yyyy hh:mm"),
    // Set default value to the current timestamp
    // Use a getter method to format the timestamp on query
  },
  username: {
    type: String,
    required: true,
  },
  // reactions: {
  //   // Array of nested documents created with the `reactionSchema`
  //   reactions: reactionSchema,
  // },
};

const schema = new Schema(thoughtSchema);

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
// schema.virtual("reactionCount").get(function () {
//   return this.reactions.length;
// });

const Thought = model("Thought", schema);

module.exports = Thought;
