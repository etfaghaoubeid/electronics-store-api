const { User } = require("../../models/user");
const { Phone } = require("../../models/phone");
const syncModels = async () => {
  await User.sync({ force: true });
  await Phone.sync({ force: true });
  console.log("models sync");
};
syncModels();
exports.syncModels = syncModels;
