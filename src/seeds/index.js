require("dotenv").config();
const mongoose = require("mongoose");

const { User, Thought, Reaction } = require("../models");

const users = require("./users.json");
const thoughts = require("./thoughts.json");
// const seedReactions = require("./reactions.json");
// const seedFriends = require("./friends.json");

const init = async () => {
  try {
    const DB_NAME = process.env.DB_NAME;
    const MONGODB_URI =
      process.env.MONGODB_URI || `mongodb://localhost:27017/${DB_NAME}`;

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(MONGODB_URI, options);

    console.log("[INFO]: Successfully connected to DB");

    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({});

    const promises = users.map((user) => {
      return User.create(user);
    });
    await Promise.all(promises);
    console.log("[INFO]: Successfully seeded users");

    await Thought.insertMany(thoughts);
    console.log("[INFO]: Successfully seeded thoughts");

    // seed reactions
  } catch (error) {
    console.log(`[ERROR]: Failed to seed DB | ${error.message}`);
  }

  process.exit(0);
};

init();
