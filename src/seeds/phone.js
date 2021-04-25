const { sequelize } = require("../config/db");
const Phone = require("../models/phone");
const User = require("../models/user");

const phonesData = [
  {
    name: "Iphone 11 pro max",
    price: 30000,
    image:
      "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    used: false,
    description:
      "iPhone 12 Pro With Facetime 256GB Graphite 5G - Middle East Version",
    capacity: 256,
    inStock: true,
  },
  {
    name: "Iphone X",
    price: 160,
    image:
      "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    used: true,
    description:
      "iPhone 12 Pro With Facetime 256GB Graphite 5G - Middle East Version",
    capacity: 256,
    inStock: true,
  },
  {
    name: "Iphone 7plus",
    price: 11000,
    image:
      "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    used: false,
    description:
      "iPhone 12 Pro With Facetime 256GB Graphite 5G - Middle East Version",
    capacity: 256,
    inStock: true,
  },
  {
    name: "Iphone 12 pro",
    price: 25000,
    image:
      "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    used: false,
    description:
      "Brand iPhone 12 Pro With Facetime 256GB Graphite 5G - Middle East Version",
    capacity: 64,
    inStock: true,
  },
  {
    name: "Iphone 12 pro",
    price: 230,
    image:
      "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    used: true,
    description:
      "iPhone 12 Pro With Facetime 256GB Graphite 5G - Middle East Version new",
    capacity: 64,
    inStock: true,
  },
  {
    name: "Iphone 11 ",
    price: 19000,
    image:
      "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    used: true,
    description:
      "BriPhone 12 Pro With Facetime 256GB Graphite 5G - Middle East Versionnd new",
    capacity: 64,
    inStock: true,
  },
  {
    name: "Iphone XR",
    price: 13000,
    image:
      "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    used: false,
    description:
      "iPhone 12 Pro With Facetime 256GB Graphite 5G - Middle East Version",
    capacity: 64,
    inStock: true,
  },
];

exports.seedPhone = async () => {
  phonesData.map(async (item) => {
    try {
      await Phone.create(item);
    } catch (error) {
      console.log(error.message);
    }
  });
  console.log("seed phone successfuly");
};
exports.deletePhones = async () => {
  const res = await Phone.findAll({});
  const data = await res.json();
  console.log(data, "1111111111111111111111 deletePhones");
};
