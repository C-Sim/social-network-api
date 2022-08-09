const { Schema, model } = require("mongoose");

const dateFns = require("date-fns");

const reactionSchema = {
  reactionId: {
    type: Schema.Types.ObjectId,
    default: new Schema.Types.ObjectId(),
    // Use Mongoose's ObjectId data type
    // Default value is set to a new ObjectId
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: dateFns.format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS"),
    // Use a getter method to format the timestamp on query
  },
};

const schema = new Schema(reactionSchema);

const Reaction = model("Reaction", schema);

module.exports = Reaction;
