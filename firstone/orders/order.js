const express=require('express')
const connectDb = require('./config/connect')
const dotenv=require('dotenv').config({path:'config/.env'})
const orderRoute=require('./routes/orderRoute')
const app=express()
const PORT=process.env.PORT || 5000



// databse
connectDb()

// middlewares 
app.use(express.json())


// routes
app.use('/api/v1',orderRoute)

// listening to the port 
app.listen(PORT,()=>{
    console.log(`running at the port number ${PORT}`)
})