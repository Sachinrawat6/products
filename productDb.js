require("dotenv").config();
require("./DB/connect");
const Product = require("./models/model.product");
const product =  require("./product.json");
const start = async()=>{
    try {
        await Product.create(product);
        console.log("Product stored on database");
    } catch (error) {
        console.log("Failed to store on database");
    }
}

start();

