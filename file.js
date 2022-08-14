// const config = require('config');
// const express = require('express');
// const app1=express();

// const port = config.get('server.port')
// const host = config.get('server.host')

// app1.get('/', (req,res)=>{
//     res.send("Hello Manoj!")
// } )

// app1.listen(port, ()=>{
//     console.log("App is running on"+ host + " " + port);
// })
//const env = require('dotenv');
const config = require('config');
//env.config();
//...
const dbConfig = config.get('Customer.dbConfig');
console.log(dbConfig);
const credit = config.get('Customer.credit');
console.log(credit);
console.log(config.get('Customer.users'));

// const users = config.get('/config/details.json');
// console.log(users.user1)



// const server= app1.listen(port, host, (err)=>{
//     if(err){
//         console.log(err);
//         process.exit(1);
//     }

//     const url = 'http://$(host):${server.address().port}';
//     const message = 'Listening on ${url}';

//     console.log(message);
//     if(process.env.NODE_ENV === "development"){
//         require("open")(url);
//     }
// });
//console.log(config.get('user1.name'))