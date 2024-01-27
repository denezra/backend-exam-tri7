require("dotenv").config();

module.exports = {
  secretKey: process.env.SECRET_KEY, // Replace with a strong and secret key
  mongoURI: process.env.MONGO_URI, // Replace with your MongoDB connection string
};
