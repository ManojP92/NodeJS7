var express= require('express');
var catModel= require('../models/category');

var router = express.Router();

router.get('/',async function(req,res,next){
    let cat = await catModel.find();
    res.send(cat)
});
router.post('/', async function(req,res,next){
    let category = new catModel(req.body);
    try{
    await category.save();
    res.status(200).send(category);
     } catch(err){
        res.status(500).send(err);
     }
});

router.put('/:id', async function(req,res,next){
    
    let category = new catModel();
    try{
    await category.findOneAndUpdate({_id:req.params.id},{$set:{id:req.body.id}},{new:true});
    res.status(200).send(category);
     } catch(err){
        res.status(500).send(err);
     }
});


module.exports=router;
