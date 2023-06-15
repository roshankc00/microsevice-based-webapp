const express=require('express')
const dotenv=require('dotenv').config({path:'config/.env'})
const customerRoute=require('./routes/cusRoute')
const connectDb = require('./config/connectDb')
const app=express()
const PORT=process.env.PORT || 5000



// databse
connectDb()

// middlewares 
app.use(express.json())


// routes
app.use('/api/v1',customerRoute)

// listening to the port 
app.listen(PORT,()=>{
    console.log(`running at the port number ${PORT}`)
})