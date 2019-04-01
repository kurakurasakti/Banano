const express = require('express');
const app = express();

const productRoutes = require('./routes/products');

app.use('/product', productRoutes);

module.exports = app;