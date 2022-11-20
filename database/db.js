const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.MONGODB_URL;

mongoose.connect(
  uri,
  {
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log(error);
      console.log(process.env.MONGODB_URL);
    } else {
      console.log("Mongo DB Connected");
    }
  }
);
