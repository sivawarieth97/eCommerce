//const db=require('../util/database');
const products=[];

module.exports=class Product{
    constructor(title,url,price,desc){
        this.title=title;
        this.url=url;
        this.price=price;
        this.desc=desc;
        this.id=Math.random().toString();
    }
    save(){
        products.push(this);
    }
    
    static fetchdata(){
        return products;
    }
    static getById(id,cb){
        const p=products.find(p => p.id=id);
        cb(p);
    }
    
}
