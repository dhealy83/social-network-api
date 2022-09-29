const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_URI ||
  "mongodb+srv://admin:admin@hunting-buddy.sa6ikiv.mongodb.net/social-network-api";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
