var express= require('express');
const logger = require('../logger/myLogger');
var empModel= require('../models/employee');

  
var router = express.Router();
router.get('/',async function(req,res,next){
    try       {
    let employees = await empModel.find();
    res.send(employees);
    logger.myLogger.log('info',"Successfully fetched the data of all employees!")
} catch(error){
res.status(500).send({message: "An error occured"});
logger.myLogger.log('error', "Error finding all employees!")
}
})
router.post('/', async function(req,res,next){
    let employees = new empModel(req.body);
    try{
    await employees.save(); //add validation for same id
    res.send(employees);
    logger.myLogger.log('info',"New employee is added successfully!")
     } catch(error){
        res.status(500).send(error);
        console.log(Error); // next sess agenda: auth, author
        logger.myLogger.log('error',"Error while adding a new employee.")
     }
    //  next();
})
router.get('/:id',async function(req,res,next){
    console.log(req.params);
    let id= req.params.id;
    // let employee = await empModel.findOne({id:id});
    // // let emp = await empModel.exists({id:id});
    // // console.log("emp:",emp);
    // console.log("employee: ", employee);
    // (employee)?res.send(employee):res.status(500);
    try{
    let employee= await empModel.findOne({id:id});
    if(employee){
    res.status(200).send(employee);
    logger.myLogger.log('info',"An employee record is fetched up successfully");};
    // const customErr={
    //     code:500,
    //     message:'invalid ID'
    // }
    if(employee==null){
    throw error;}
}
    catch(error){
         res.status(500).send("Invalid ID");
        logger.myLogger.log('error', "Error while featching an employee record!",);
    }
})
router.put('/:id', async function(req,res,next){
    try
    { 
    let employees= await empModel.findOneAndUpdate({id:req.params.id},req.body);
    if(employees){
        res.status(200).send("Success: Record updated!");
        // let updated= await empModel.findOne({id:req.params.id});
        // res.send(updated);
        logger.myLogger.log('info',"An employee record has been updated successfully.");}
        else
    throw error  } 
    catch(error)
    {
        res.status(500).send("An error has occured!");
        logger.myLogger.log('error',"An error has occured while updating a document.")
    }
    // next();
})
router.delete('/:id', async function(req,res,next){

    try
    {let employees= await empModel.deleteOne({id:req.params.id});
     if(employees.deletedCount!=0){
        res.send("This record has been deleted successfully");
        logger.myLogger.log('info',"Successfully deleted a record")
     } else
    throw error;
}
    catch(error){
        res.status(500).send("Invalid ID");
        logger.myLogger.log('error',"Error while deleting")
    }
    // next();
})
module.exports=router;
//create 2 collections : product and catagory 
// create products with catagory id 
// form a join operation to see the products