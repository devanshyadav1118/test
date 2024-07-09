const express = require('express');
const Product = require('./models/Product');  
const router = express.Router();

router.get('/products', async (req, res) => {
  const { minPrice } = req.query;
  try {
    const products = await Product.find({ price: { $gt: minPrice } }).sort({ price: -1 });
    res.send(products);
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
});

module.exports = router;
