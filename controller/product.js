const Product = require('../model/product');
//const cartProduct=require('../model/cart')
exports.getAddProduct=(req,res,next)=>{
    res.render('addProduct',{pageTitle:'Add Product'});
};
exports.postAddProduct=(req,res,next)=>{
    const p=new Product(req.body.title,req.body.imageUrl,req.body.price,req.body.description);
    p.save();
    res.redirect('/');
};
exports.getShop=(req,res,next)=>{
    Product.fetchdata(products=>{
        res.render('shop',{ prods:products,pageTitle:'Siva the Great'});
    });
        
};


   
exports.errorPage=(req,res,next)=>{
    res.status(404).render('404',{pageTitle : 'Page Not Found'});
}
exports.getProducts=(req,res,next)=>{
    const products=Product.fetchdata();
    res.render('editProduct',{prods:products, pageTitle:'Admin Product'});
}
exports.getOrders=(req,res,next)=>{
    res.render('orders',{ pageTitle:'Your Order'});
}
exports.getCart=(req,res,next)=>{
    res.render('cart',{ pageTitle:'Your Cart'});
}
exports.getProduct=(req,res,next)=>{
    const products=Product.fetchdata();
    res.render('product',{prods:products, pageTitle:'Product'});
}
exports.getEdit=(req,res,next)=>{
    
    res.render('edit',{ pageTitle:'Edit Product'});
} 
exports.getDetails=(req,res,next)=>{
    
    const pid=req.params.pid;
    Product.getById(pid , product=> {
        res.render('productdetail',{ p:product, pageTitle:'Edit Product'});

    });
   // console.log(pid);
} 
exports.getCart=(req,res,next)=>{
   
    res.render('cart',{pageTitle:'Product'});
};
exports.postCart=(req,res,next)=>{
   const pid=req.body.pid;
    res.render('cart',{pageTitle:'Product'});
};

/* add cart
exports.postCart=(req,res,next)=>{
    p.saveCart();
    res.redirect('/cart');
};
 */