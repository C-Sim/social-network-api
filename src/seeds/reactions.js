const prepareReactionData = () => {
  const reactionData = [];

  for (let i = 0; i < 100; i += 1) {
    // const reactionId = faker.image.cats();
    const reactionBody = faker.lorem.sentence();
    // const username = faker.internet.userName();
    // const createdAt = faker.internet.exampleEmail();

    const reaction = {
      reactionId,
      reactionBody,
      username,
      createdAt,
    };

    reactionData.push(reaction);
  }

  return reactionData;
};

const seedReactions = async () => {
  const reactionData = await prepareReactionData();

  await Reaction.bulkCreate(reactionData);
};

module.exports = seedReactions;
