const Phone = require("./model");

exports.getPhones = async () => {
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
