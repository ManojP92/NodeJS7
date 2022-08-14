var express= require('express');
var router = express.Router();

//   const app= express();
//   app.use(express.json());

let arr= [{"id":1, "name":"manoj"},
          {"id":2, "name":"vikram"},
          {"id":3, "name":"john"},
          {"id":4, "name":"pug"}]

router.get('/',function(req,res,next){
    res.send(arr);
})
router.get('/:id', (req,res)=>{
    const user= arr.find(c=>c.id === parseInt(req.params.id));
    if(!user) return res.status(404).send("Invalid ID!");
    res.send(user);
})
router.post('/',(req,res,next)=>{
    const user= {
        id: arr.length + 1,
        name: req.body.name
    };
    arr.push(user);
    res.send( user);
    
})
router.put('/:id',function(req,res,next){
    const user= arr.find(c=>c.id === parseInt(req.params.id));
    if(!user) return res.status(404).send("Invalid ID!");
    //updating the record
    user.name = req.body.name;
    // return the updated record
    res.send(user);
})
router.delete('/:id',function(req,res,next){
     //finding the record
     const user= arr.find(c=>c.id === parseInt(req.params.id));
     if(!user) return res.status(404).send("Invalid ID!");
     //if found then DELETE
     const index = arr.indexOf(user);
     arr.splice(index,1);
     // return the updated record
     res.send(user);
})
module.exports = router;