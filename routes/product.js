var express= require('express');
var prodModel= require('../models/product');

var router = express.Router();

router.get('/',async function(req,res,next){
    let products = await prodModel.find();
    res.send(products)
})
router.post('/', async function(req,res,next){
    let products = new prodModel(req.body);
    try{
    await products.save();
    res.status(200).send(products);
     } catch(err){
        res.status(500).send(err);
     }
});
module.exports=router;