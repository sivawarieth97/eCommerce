const express=require('express');
const path=require('path');
const router=express.Router();
const getprod=require('../controller/product')

router.get('/addproduct',getprod.getAddProduct);
router.post('/addproduct',getprod.postAddProduct);
router.get('/product',getprod.getProducts);
router.get('/edit',getprod.getEdit);


module.exports=router;

