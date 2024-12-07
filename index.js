require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./config/connection')
const testServer = express()

testServer.use(cors())
testServer.use(express.json())
testServer.use(router)

const PORT = 3000 

testServer.listen(PORT,()=>{
    console.log(`Server started at port : ${PORT} and waiting for client request!!`);
    
})

testServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:red">Server started at port and waiting for client request !!!</h1>`)
})

testServer.post('/',(req,res)=>{
    res.status(200).send(`POST REQUEST`)
})