const { sequelize } = require("../config/db");
const Accessory = require("../models/accessory");
const Customer = require("../models/customer");
const Location = require("../models/location");
const Phone = require("../models/phone");
const Product = require("../models/product");
const User = require("../models/user");
const {
  products,
  phones,
  locations,
  customers,
  accessoriesProduct,
  accessories,
} = require("./data");

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

exports.up = async () => {
  // create products work
  // for (let i = 0; i < products.length; i++) {
  // try {
  // await Product.create(products[i]);
  // } catch (error) {
  // console.log(error.message);
  // }
  // }
  // need to fix product id values
  // const fetchedProducts = await Product.findAll({});
  // for (let i = 0; i < products.length; i++) {
  // try {
  // await Phone.create({
  // capacity: 256,
  // productId: fetchedProducts[i].id,
  // });
  // } catch (error) {
  // console.log(error.message);
  // }
  // }
  // works but need to set the proper value for the product key
  // accessories.map(async (item) => {
  // return await Accessory.create(item);
  // });
  // await Customer.create({
  // ...customers[i],
  // locationId: fetchedCustomers[i].id,
  // });
  // }
};
exports.down = async () => {
  console.log("ressource deleted successful", "111111111111111111111111111");
  try {
    await Phone.destroy({
      where: {},
      truncate: true,
    });
    await Product.destroy({
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
