const { Thought } = require("../models");

const thoughts = [
  {
    thoughtText: "If it's up, then it's up",
    createdAt: "8 Aug 2020 08:08",
    username: "C-B",
    reactions: [
      {
        reactionId: "",
        reactionBody: "I know that's right!",
        username: "M-t-S",
        createdAt: "8 Aug 2020 08:18",
      },
    ],
  },
  {
    thoughtText: "It's a hot summer",
    createdAt: "8 Aug 2020 08:08",
    username: "M-t-S",
    reactions: [
      {
        reactionId: "",
        reactionBody: "We're not talking about degrees",
        username: "N-M",
        createdAt: "8 Aug 2020 08:18",
      },
      {
        reactionId: "",
        reactionBody: "I like it like that",
        username: "C-B",
        createdAt: "8 Aug 2020 08:18",
      },
      {
        reactionId: "",
        reactionBody: ";)",
        username: "D-C",
        createdAt: "8 Aug 2020 08:18",
      },
    ],
  },
  {
    thoughtText: "On a power trip",
    createdAt: "8 Aug 2020 08:08",
    username: "J-C",
    reactions: [
      {
        reactionId: "",
        reactionBody: "",
        username: "",
        createdAt: "8 Aug 2020 08:18",
      },
    ],
  },
  {
    thoughtText: "Summertime fine",
    createdAt: "8 Aug 2020 08:08",
    username: "J-C",
    reactions: [
      {
        reactionId: "",
        reactionBody: "Wintertime cold",
        username: "C-P",
        createdAt: "8 Aug 2020 08:18",
      },
    ],
  },
  {
    thoughtText: "Overly focused, it's far from the time to rest now",
    createdAt: "8 Aug 2020 08:08",
    username: "C-P",
    reactions: [
      {
        reactionId: "",
        reactionBody: "cake, cake, cake, cake, cake",
        username: "J-Z",
        createdAt: "8 Aug 2020 08:18",
      },
      {
        reactionId: "",
        reactionBody: "C.R.E.A.M",
        username: "J-C",
        createdAt: "8 Aug 2020 08:18",
      },
    ],
  },
  {
    thoughtText: "I don't plan on stopping at all",
    createdAt: "8 Aug 2020 08:08",
    username: "C-P",
    reactions: [
      {
        reactionId: "",
        reactionBody: "The passion and the flame is ignited",
        username: "M-M",
        createdAt: "8 Aug 2020 08:18",
      },
    ],
  },
  {
    thoughtText: "Spent all my euros on tuxes and weird clothes",
    createdAt: "8 Aug 2020 08:08",
    username: "J-Z",
    reactions: [
      {
        reactionId: "",
        reactionBody: "International",
        username: "C-P",
        createdAt: "8 Aug 2020 08:18",
      },
    ],
  },
  {
    thoughtText: "Hit me back, just to chat. Truly yours, your biggest fan.",
    createdAt: "8 Aug 2020 08:08",
    username: "M-M",
    reactions: [
      {
        reactionId: "",
        reactionBody: "",
        username: "...",
        createdAt: "8 Aug 2020 08:18",
      },
    ],
  },
  {
    thoughtText: "No time to talk, just Hi and Bye",
    createdAt: "8 Aug 2020 08:08",
    username: "N-M",
    reactions: [
      {
        reactionId: "",
        reactionBody: "I know things get hard but girl you've got it",
        username: "C-P",
        createdAt: "8 Aug 2020 08:18",
      },
    ],
  },
  {
    thoughtText: "You got to keep me focused",
    createdAt: "8 Aug 2020 08:08",
    username: "D-C",
    reactions: [
      {
        reactionId: "",
        reactionBody: "",
        username: "...",
        createdAt: "8 Aug 2020 08:18",
      },
    ],
  },
  {
    thoughtText: "That's not a reliable source",
    createdAt: "8 Aug 2020 08:08",
    username: "C-B",
    reactions: [
      {
        reactionId: "",
        reactionBody: "You've seen the stats...you know what I am about",
        username: "N-M",
        createdAt: "8 Aug 2020 08:18",
      },
    ],
  },
  {
    thoughtText:
      "Never been afraid to say what's on my mind, at any given time of day",
    createdAt: "8 Aug 2020 08:08",
    username: "J-Z",
    reactions: [
      {
        reactionId: "",
        reactionBody: "Maybe it's food for the spirit",
        username: "M-M",
        createdAt: "8 Aug 2020 08:18",
      },
    ],
  },
];

const seedThoughts = async () => {
  await Thought.insertMany(thoughts);

  console.log("[INFO]: Successfully seeded thoughts");
};

module.exports = { seedThoughts };
