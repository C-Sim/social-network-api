const connectToDatabase = require("../config/connection");

const { User, Thought } = require("../models");

const { seedUsers } = require("./users");
const { seedThoughts } = require("./thoughts");

const clearCollections = async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});
};

const usernames = ["C-B", "M-t-S", "J-C", "C-P", "J-Z", "M-M", "N-M", "D-C"];

const thoughts = [
  {
    thoughtText: "If it's up, then it's up",
    createdAt: "8 Aug 2020 08:08",
    username: "C-B",
    reactions: [],
  },
  {
    thoughtText: "That's not a reliable source",
    createdAt: "8 Aug 2020 08:08",
    username: "C-B",
    reactions: [],
  },
  {
    thoughtText: "It's a hot summer",
    createdAt: "8 Aug 2020 08:08",
    username: "M-t-S",
    reactions: [],
  },
  {
    thoughtText: "On a power trip",
    createdAt: "8 Aug 2020 08:08",
    username: "J-C",
    reactions: [],
  },
  {
    thoughtText: "Summertime fine",
    createdAt: "8 Aug 2020 08:08",
    username: "J-C",
    reactions: [],
  },
  {
    thoughtText: "Overly focused, it's far from the time to rest now",
    createdAt: "8 Aug 2020 08:08",
    username: "C-P",
    reactions: [],
  },
  {
    thoughtText: "I don't plan on stopping at all",
    createdAt: "8 Aug 2020 08:08",
    username: "C-P",
    reactions: [],
  },
  {
    thoughtText: "Spent all my euros on tuxes and weird clothes",
    createdAt: "8 Aug 2020 08:08",
    username: "J-Z",
    reactions: [],
  },
  {
    thoughtText:
      "Never been afraid to say what's on my mind, at any given time of day",
    createdAt: "8 Aug 2020 08:08",
    username: "J-Z",
    reactions: [],
  },
  {
    thoughtText: "Hit me back, just to chat. Truly yours, your biggest fan.",
    createdAt: "8 Aug 2020 08:08",
    username: "M-M",
    reactions: [],
  },
  {
    thoughtText: "No time to talk, just Hi and Bye",
    createdAt: "8 Aug 2020 08:08",
    username: "N-M",
    reactions: [],
  },
  {
    thoughtText: "You got to keep me focused",
    createdAt: "8 Aug 2020 08:08",
    username: "D-C",
    reactions: [],
  },
];

const init = async () => {
  try {
    await connectToDatabase();

    await clearCollections();

    await seedUsers();

    await Thought.insertMany(thoughts);

    const thoughtsFromDb = await Thought.find({});

    const userThoughtIds = {};

    usernames.forEach((username) => {
      const thoughtsByUsername = thoughtsFromDb.filter((each) => {
        return each.username === username;
      });

      const thoughtIds = thoughtsByUsername.map((each) => {
        return each._id;
      });

      userThoughtIds[username] = thoughtIds;
    });

    console.log(userThoughtIds);

    // await seedThoughts();
  } catch (error) {
    console.log(`[ERROR]: Failed to seed DB | ${error.message}`);
  }

  process.exit(0);
};

init();
