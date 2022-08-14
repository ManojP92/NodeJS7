const express= require('express');
const app= express();
const path= require('path');
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/HRDatabase').then(()=>console.log('Connected to MongoDB...!'))
.catch(err=>console.error('Could not establish a connection!',err));
const morgan= require('morgan');
 app.use(express.json()); 
//  const fs= require('fs');

app.use(morgan("short"));

let usersRoute= require('./routes/users');
let appsRoute= require('./routes/apps');
let empRoute = require('./routes/employee');
let prodRoute = require('./routes/product');
let catRoute = require('./routes/category');

app.use('/users', usersRoute);
 app.use('/apps', appsRoute);
 app.use('/employee', empRoute);
 app.use('/product', prodRoute);
 app.use('/category', catRoute);
 
 app.get('/',(req,res)=>{
    console.log("Homepage");
    res.sendFile(path.resolve(__dirname,'./Assets/intro.html'))
 })
 app.all('*', (req,res)=>{
    res.status(404).send("Resource not found!!")
 });
//  app.use('/',(req,res)=>{
//     console.log("404- Route not found!");
//     res.send("404- Route not found!");
//  })

app.listen(3000,()=>{
    console.log("Server is up and running fine")
})