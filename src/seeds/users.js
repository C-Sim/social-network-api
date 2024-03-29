const { User } = require("../models");

const users = [
  {
    username: "C-B",
    email: "Belcalis.Almanzar@offset.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "J-C",
    email: "Jermaine.Cole@workout.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "C-P",
    email: "Aubrey.Graham@ovo.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "M-M",
    email: "Marshall.Mathers@lp.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "N-M",
    email: "Onika.Minaj@anaconda.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "J-Z",
    email: "Shawn.Carter@hove.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "M-t-S",
    email: "Megan.Pete@hgs.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "D-C",
    email: "Amala.Dlamini@woman.com",
    thoughts: [],
    friends: [],
  },
];

const seedUsers = async () => {
  await User.insertMany(users);

  console.log("[INFO]: Successfully seeded users");
};

module.exports = { seedUsers };
