const express=require("express")
const connectDb = require("./config/connectDb")
const dotenv=require('dotenv').config({path:'config/.env'})
const app=express()
const bookRoute=require('./routes/bookRoute')
const PORT=process.env.PORT || 3000

connectDb()
// 
app.use(express.json())

// routes
app.use('/api/v1',bookRoute)

app.listen(PORT,()=>{
    console.log(`running at the port ${PORT}`)
})