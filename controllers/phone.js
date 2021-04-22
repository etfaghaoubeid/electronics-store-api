const Phone = require("../models/phone");
const { Sequelize } = require("sequelize");
const Product = require("../models/product");
const Accessory = require("../models/accessory");

exports.addPhone = async (req, res) => {
  try {
    const { name, price, used, description, image } = req.body;
    const phone = await Phone.build({ name, price, used, description, image });
    const savedItem = await phone.save();
    if (savedItem) {
      return res.status(201).json(phone);
    }
    return res.status(203).json({ message: "Non authoritative information" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
exports.getPhones = async (req, res) => {
  try {
    const phones = await Phone.findAll({});
    if (phones) {
      return res.status(200).json(phones);
    }
    return res.json(phones);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
exports.editPhone = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      price,
      used,
      description,
      image,
      capacity,
      inStock,
    } = req.body;
    const phone = await Phone.findByPk(id);
    phone.name = name || phone.name;
    phone.price = price || phone.price;
    phone.used = used || phone.used;
    phone.description = description || phone.description;
    phone.image = image || image.image;
    phone.capacity = capacity || image.capacity;
    phone.capacity = inStock || image.inStock;
    const updatedPhone = await phone.save(phone);
    if (updatedPhone) {
      return res.status(201).json({ updatedPhone });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.deletePhone = async (req, res) => {
  try {
    const { id } = req.params;
    const phoneToDelete = await Phone.findByPk(id);
    const deletedPhone = await phoneToDelete.destroy({ id });
    return res
      .status(202)
      .json({ message: "ressouces was deleted cuccessfuly" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
// exports.filler = async (req, res) => {
//   try {
//     const { sort } = req.params;
//     const filteredData = await Phone.findAll({ sort });
//     if (filteredData) {
//       return res.status().json(filteredData);
//     }
//   } catch (error) {
//     return res.status(500).json({ message: error.massage });
//   }
// };
