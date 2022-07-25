const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = async () => {
  // Connecting to the database
  await mongoose
    .connect("mongodb://127.0.0.1:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
