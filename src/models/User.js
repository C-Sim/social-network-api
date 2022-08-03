const { Schema, model } = require("mongoose");

const validator = require("validator");

// const thoughtSchema = require("./Thought");

const userSchema = {
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please enter a valid email address",
      isAsync: false,
    },
  },
  thoughts: [
    {
      // Array of `_id` values referencing the `Thought` model
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      // Array of `_id` values referencing the `User` model (self-reference)
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
};

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const schema = new Schema(userSchema);

// where will userId come from?
schema.pre("remove", function (next) {
  Thought.remove({ userId: this._id }).exec();
  next();
});

const User = model("User", schema);

module.exports = User;
