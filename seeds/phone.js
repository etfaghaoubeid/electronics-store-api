const { sequelize } = require("../config/db");
const Phone = require("../models/phone");

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
