const Category = require("../models/category");
const User = require("../models/user");

exports.register = async (req, res) => {
  console.log("requisted");
  try {
    const { name, phone } = req.body;
    const user = await User.build({ name, phone });
    console.log(user, "11111111111111111111111");
    await user.save();
    return res.send(user);
  } catch (error) {
    console.log(error);
  }
};
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({});
    return res.json(users);
  } catch (error) {
    console.log(error);
  }
};
exports.tes = async (req, res) => {
  try {
    const cat = Category.findAll();
    if (cat) {
      return res.json(cat);
    }
    return res.json({ message: "no category" });
  } catch (error) {
    console.log(error);
  }
};
