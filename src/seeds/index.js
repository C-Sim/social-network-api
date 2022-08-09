const connectToDatabase = require("../config/connection");

const { User, Thought } = require("../models");

const { seedUsers } = require("./users");
const { seedThoughts } = require("./thoughts");

const clearCollections = async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});
};

const init = async () => {
  try {
    await connectToDatabase();

    await clearCollections();

    await seedUsers();

    await seedThoughts();
  } catch (error) {
    console.log(`[ERROR]: Failed to seed DB | ${error.message}`);
  }

  process.exit(0);
};

init();
