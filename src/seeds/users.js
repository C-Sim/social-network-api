const { User } = require("../models");

const users = [
  {
    username: "C-B",
    email: "Belcalis.Almanzar@offset.com",
    thoughts: ["62f13a2187c5a9d2e3814c7f", "62f13a2187c5a9d2e3814c89"],
    friends: ["62f13451ff4c104710d8a979", "62f13451ff4c104710d8a97a"],
  },
  {
    username: "J-C",
    email: "Jermaine.Cole@workout.com",
    thoughts: ["62f13a2187c5a9d2e3814c81", "62f13a2187c5a9d2e3814c82"],
    friends: ["62f13451ff4c104710d8a975"],
  },
  {
    username: "C-P",
    email: "Aubrey.Graham@ovo.com",
    thoughts: ["62f13a2187c5a9d2e3814c83", "62f13a2187c5a9d2e3814c84"],
    friends: [
      "62f13451ff4c104710d8a974",
      "62f13451ff4c104710d8a976",
      "62f13451ff4c104710d8a977",
      "62f13451ff4c104710d8a978",
    ],
  },
  {
    username: "M-M",
    email: "Marshall.Mathers@lp.com",
    thoughts: ["62f13a2187c5a9d2e3814c86"],
    friends: [
      "62f13451ff4c104710d8a975",
      "62f13451ff4c104710d8a979",
      "62f13451ff4c104710d8a979",
    ],
  },
  {
    username: "N-M",
    email: "Onika.Minaj@anaconda.com",
    thoughts: ["62f13a2187c5a9d2e3814c87"],
    friends: ["62f13451ff4c104710d8a975", "62f13451ff4c104710d8a978"],
  },
  {
    username: "J-Z",
    email: "Shawn.Carter@hove.com",
    thoughts: ["62f13a2187c5a9d2e3814c85", "62f13a2187c5a9d2e3814c8a"],
    friends: [
      "62f13451ff4c104710d8a975",
      "62f13451ff4c104710d8a976",
      "62f13451ff4c104710d8a977",
    ],
  },
  {
    username: "M-t-S",
    email: "Megan.Pete@hgs.com",
    thoughts: ["62f13a2187c5a9d2e3814c80"],
    friends: ["62f13451ff4c104710d8a973", "62f13451ff4c104710d8a978"],
  },
  {
    username: "D-C",
    email: "Amala.Dlamini@woman.com",
    thoughts: ["62f13a2187c5a9d2e3814c88"],
    friends: ["62f13451ff4c104710d8a973"],
  },
];

const seedUsers = async () => {
  await User.insertMany(users);

  console.log("[INFO]: Successfully seeded users");
};

module.exports = { seedUsers };
