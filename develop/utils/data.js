const users = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Aayan",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
  "Abdul-Aziz",
  "Abdulbasir",
  "Abdulkadir",
  "Abdulkarem",
  "Smith",
  "Jones",
  "Coollastname",
  "enter_name_here",
  "Ze",
  "Zechariah",
  "Zeek",
  "Zeeshan",
  "Zeid",
  "Zein",
  "Zen",
  "Zendel",
  "Zenith",
  "Zennon",
  "Zeph",
  "Zerah",
  "Zhen",
  "Zhi",
  "Zhong",
  "Zhuo",
  "Zi",
  "Zidane",
  "Zijie",
  "Zinedine",
  "Zion",
  "Zishan",
  "Ziya",
  "Ziyaan",
  "Zohaib",
  "Zohair",
  "Zoubaeir",
  "Zubair",
  "Zubayr",
  "Zuriel",
  "Xander",
  "Jared",
  "Courtney",
  "Gillian",
  "Clark",
  "Jared",
  "Grace",
  "Kelsey",
  "Tamar",
  "Alex",
  "Mark",
  "Tamar",
  "Farish",
  "Sarah",
  "Nathaniel",
  "Parker",
];

const email = [
  "145@abc.com",
  "127@abc.com",
  "1222222@abc.com",
  "144@abc.com",
  "1288@abc.com",
  "12wasd3@abc.com",
  "1288@a78765456bc.com",
  "12wasd3rfdrt3@abc.com",
  "128ytrfgb8@abc.com",
  "12was6543wedd3@abc.com",
];

const thoughts = [
  "Decision Tracker",
  "Find My Phone",
  "Learn Piano",
  "Starbase Defender",
  "Tower Defense",
  "Monopoly Money Manager",
  "Movie trailers",
  "Hello world",
  "Stupid Social Media App",
  "Notes",
  "Messages",
  "Email",
  "Compass",
  "Firefox",
  "Running app",
  "Cooking app",
  "Poker",
  "Deliveries",
];
const reactions = ["Thumbs up", "Thumbs down"];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomEmail = (int) => `${email[int]}`;

const getRandomUser = (int) => `${users[int]}`;

// Function to generate random assignments that we can add to student object.
const getRandomThought = (int, thoughtOwner, reactionOwners) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughts),
      username: thoughtOwner,
      reactions: [
        {
          reactionBody: getRandomArrItem(reactions),
          username: getRandomArrItem(reactionOwners),
        },
        {
          reactionBody: getRandomArrItem(reactions),
          username: getRandomArrItem(reactionOwners),
        },
      ],
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThought, getRandomEmail };
