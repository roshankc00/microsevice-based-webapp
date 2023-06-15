const express=require('express')
const dotenv=require('dotenv').config({path:'config/.env'})
const customerRoute=require('./routes/cusRoute')
const app=express()
const PORT=process.env.PORT || 5000


// 
app.use(express.json())
app.use('/api/v1',customerRoute)
app.listen(PORT,()=>{
    console.log(`running at the port number ${PORT}`)
})