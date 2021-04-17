const Phone = require("../models/phone");

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
    const { name, price, used, description, image } = req.body;
    console.log(used, "useeeeeeeeeeeeeeeesd");
    const phone = await Phone.findByPk(id);
    phone.name = name || phone.name;
    phone.price = price || phone.price;
    phone.used = used || phone.used;
    phone.description = description || phone.description;
    phone.image = image || image.image;
    const updatedPhone = await phone.save(phone);
    if (updatedPhone) {
      return res.status(201).json({ updatedPhone });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
