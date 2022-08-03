const seedUsers = require("./users.json");
const seedThoughts = require("./thoughts.json");
const seedReactions = require("./reactions.json");
const seedFriends = require("./friends.json");

// const mongoose = require("../config/connection");

const seedAll = async () => {
  await mongoose.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedThoughts();
  console.log("\n----- THOUGHTS SEEDED -----\n");

  await seedReactions();
  console.log("\n----- REACTIONS SEEDED -----\n");

  await seedFriends();
  console.log("\n----- FRIENDS SEEDED -----\n");

  process.exit(0);
};

seedAll();
