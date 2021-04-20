const { sequelize } = require("../config/db");
const Phone = require("../models/phone");
const User = require("../models/user");

const phones = [
  {
    name: "Iphone 14",
    price: 450,
    image:
      "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    used: false,
    description: "Brand new",
  },
  {
    name: "Iphone 13",
    price: 340,
    image:
      "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    used: false,
    description: "Brand new",
  },
  {
    name: "Iphone 13",
    price: 340,
    image:
      "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    used: false,
    description: "Brand new",
  },
  {
    name: "Iphone 13",
    price: 340,
    image:
      "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    used: false,
    description: "Brand new",
  },
  {
    name: "Iphone 13",
    price: 340,
    image:
      "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    used: false,
    description: "Brand new",
  },
  {
    name: "Iphone 13",
    price: 340,
    image:
      "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    used: false,
    description: "Brand new",
  },
  {
    name: "Iphone 13",
    price: 340,
    image:
      "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    used: false,
    description: "Brand new",
  },
];
users = [
  {
    name: "Atigh",
    phone: 33635471,
  },
  {
    name: "Yakoub",
    phone: 33546573,
  },
];
exports.seedPhone = () => {
  // for (let i = 0; i < phones.length; i++) {
  // await Phone.create(phones[i]);
  // }
  phones.map(async (item) => {
    try {
      console.log(item);
      await Phone.create(item);
    } catch (error) {
      console.log(error.message);
    }
  });
  console.log("seed phone successfuly");
};
exports.up = async () => {
  users.map(async (user) => {
    return await User.create(user);
  });
  const savedUsers = await User.findAll({});
  phones.map(async (item) => {
    try {
      await Phone.create({ ...item, userId: savedUsers[0].id });
    } catch (error) {
      console.log(error.message);
    }
  });
};
exports.down = async () => {
  console.log("ressource deleted successful", "111111111111111111111111111");
  try {
    await Phone.destroy({
      where: {},
      truncate: true,
    });
    await User.destroy({
      where: {},
      truncate: true,
    });
  } catch (error) {
    console.log(error);
  }
};
