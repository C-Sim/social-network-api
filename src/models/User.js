const { Schema, model } = require("mongoose");

const validator = require("validator");

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
      // check
      validator: validator.isEmail,
      message: "Please enter a valid email address",
      isAsync: false,
    },
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
};

const schema = new Schema(userSchema, {
  toJSON: {
    virtuals: true,
  },
});

schema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", schema);

module.exports = User;
