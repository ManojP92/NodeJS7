var express= require('express');


var router = express.Router();
var fs = require('fs');

router.get('/',function(req,res,next){
    res.send("this is for /apps get method");
})
router.post('/',function(req,res,next){
    res.send("A new folder and a file is created");
   // const folder =req.body;
    fs.mkdirSync('New_folder');
    fs.writeFileSync('New_folder/bio.txt',"My name is Manoj")
})
router.put('/',function(req,res,next){
    res.send("this is for /apps put method");
})
router.delete('/',function(req,res,next){
    res.send("File and folder is deleted!");
    fs.unlinkSync('New_folder/bio.txt')
    fs.rmdirSync('New_folder');
})
module.exports = router;