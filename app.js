const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const adminRouter=require('./router/admin');
const userRouter=require('./router/user');
const path=require('path');
const getprod=require('./controller/product')
//const db=require('./util/database');

app.use( express.static( "public" ) );
app.set('view engine','ejs');
app.set('views','view');
app.use(bodyparser.urlencoded({extended:false}));
app.use('/admin',adminRouter);
app.use('/',userRouter);

app.use(getprod.errorPage);


app.listen(3000);
