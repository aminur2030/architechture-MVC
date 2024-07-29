
const express=require("express");
const {  saveProduct, getProducts } = require("../controllers/products.controller");
const router=express.Router();
router.get("/products",getProducts);
router.post("/products",saveProduct)

module.exports=router;