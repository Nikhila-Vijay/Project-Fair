//const appMiddleware = require('./Middlewares/appmiddleware')

const router = require("./Router/router")

// 1) import dotenv module

require('dotenv').config()

// 2)  import express module
const express = require('express')

require('./DB/connections')

// 3) import cors module
const cors = require('cors')

// 4) create server using express
const pfserver = express()

// 5) inject cors into pfserver
   pfserver.use(cors());

// 6) use middleware to convert JSON data to js object
pfserver.use(express.json());
//pfserver.use(appMiddleware)
pfserver.use(router)
//pfserver should expose the uploads folder
pfserver.use('/uploads', express.static('./uploads'))
// 7) Provide PORT
const PORT = 4000;

// 8) run the sever
pfserver.listen(PORT, ()=>{
    console.log(`pfserver is running in PORT ${PORT}`);
    
})

pfserver.get('/',(req, res)=>{
    res.send("server is running and waiting for the client requests!!!!!!!!!!!!!!")
})