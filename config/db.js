require('dotenv').config()
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('Mongoose connected..');
  } catch (err) {
    console.error(err.message);
    // Exit process with failer
    process.exit(1);
  }
}

module.exports = connectDB;
