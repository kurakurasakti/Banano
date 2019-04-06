'use strict';
const products = require('./../models').products;



module.exports ={
  //get List Product
  getProduct : (req,res) =>{
    console.log('masuk');
    return products.findAll({
      where:{
        status : true
      }
    })
    .then(success => res.status(201).send(success))
        .catch(err => res.status(err).send(err))
  }
};
