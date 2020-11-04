const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = mongoose.connect(
      "mongodb+srv://arkady:arkady656@cluster0.pm8b5.mongodb.net/furniture-shop",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log(`mongoDB connected `);
  } catch (error) {
    console.error(`error : ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
