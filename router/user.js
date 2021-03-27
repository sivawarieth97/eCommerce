const express=require('express');
const path=require('path');
const router=express.Router();
const getprod=require('../controller/product')


router.get('/',getprod.getShop)
router.get('/orders',getprod.getOrders)
router.get('/cart',getprod.getCart)
router.post('/cart',getprod.postCart)

router.get('/product',getprod.getProduct)
router.post('/',getprod.getShop);
router.get('/products/:pid',getprod.getDetails);


module.exports=router;