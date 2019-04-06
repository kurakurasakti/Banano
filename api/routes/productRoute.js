const router = require('express').Router();
const { getProduct } = require('./../controllers').productController;

router.get('/product', getProduct);

module.exports = router;
