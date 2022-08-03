const prepareThoughtData = () => {
  const thoughtData = [];

  for (let i = 0; i < 100; i += 1) {
    const thoughtText = faker.lorem.sentence();
    // const createdAt = faker.internet.exampleEmail();
    // const username = faker.internet.userName();
    // const reactions = faker.image.cats();

    const thought = {
      thoughtText,
      createdAt,
      username,
      reactions,
    };

    thoughtData.push(thought);
  }

  return thoughtData;
};

const seedThoughts = async () => {
  const thoughtData = await prepareThoughtData();

  await Thought.bulkCreate(thoughtData);
};

module.exports = seedThoughts;
