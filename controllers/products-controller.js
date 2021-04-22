const Product = require("../models/product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({});
  } catch (error) {
    return res.json({ message: error.message });
  }
};
