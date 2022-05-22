const mongoose = require("mongoose");
const mongooseUrl = process.env.MONGOOSE_URL;


module.exports = {
  selectedDb: {},
  async connectMongoose() {
    try {
      await mongoose.connect(mongooseUrl);
      console.log("connection success");
    } catch (error) {
      console.log(error);
    }
  },
};