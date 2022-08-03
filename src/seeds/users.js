const prepareUserData = () => {
  const userData = [];

  for (let i = 0; i < 100; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.exampleEmail();
    // const thoughts = faker.lorem.sentence();
    // const friends = faker.internet.userName();

    const user = {
      username,
      email,
      thoughts,
      friends,
    };

    userData.push(user);
  }

  return userData;
};

const seedUsers = async () => {
  const userData = await prepareUserData();

  await User.bulkCreate(userData);
};

module.exports = seedUsers;
