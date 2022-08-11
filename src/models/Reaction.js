const { Schema } = require("mongoose");

const formatDate = require("../utils/formatDate");

const reactionSchema = {
  reactionId: {
    type: Schema.Types.ObjectId,
    default: new Schema.Types.ObjectId(),
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
    default: Date.now,
    get: formatDate,
  },
};

const schema = new Schema(reactionSchema);

module.exports = schema;
