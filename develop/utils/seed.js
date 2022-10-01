const connection = require("../config/connection");
const { Thought, User } = require("../models");
const { getRandomUser, getRandomThought, getRandomEmail } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing courses
  await Thought.deleteMany({});

  // Drop existing students
  await User.deleteMany({});

  // Create empty array to hold the students
  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 10; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data

    const username = getRandomUser(i);
    const email = getRandomEmail(i);

    // const thoughts = getRandomThought(10, userName, );
    users.push({
      username,
      email,
      //   thoughts,
    });
  }
  let thoughts = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < users.length; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data

    const Thought = getRandomThought(
      1,
      users[i].username,
      users.map((user) => user.username)
    );
    // const thoughts = getRandomThought(10, userName, );
    thoughts = thoughts.concat(Thought);
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.log(users);
  console.log(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
