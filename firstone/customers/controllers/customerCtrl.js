const Customer = require("../model/customerModel")

 const createCustomer=async(req,res)=>{
    try {
        const {name,age,address}=req.body
        const customer=await Customer.create({name,age,address})
        res.status(200).json({
            sucess:true,
            customer
        })
        
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:error.message
        })
    }

 }
 const getCustomer=async(req,res)=>{
    try {
        const customer=await Customer.findById(req.params.id)
        res.status(200).json({
            sucess:true,
            customer
        })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:error.message
        })
        
    }

 }
 const getAllCustomer=async(req,res)=>{
    try {
        const customers=await Customer.find({})
        res.status(200).json({
            sucess:true,
            customers
        })
        
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:error.message
        })
        
    }

 }
 const deleteCustomer=async(req,res)=>{
    try {
        const customer=await Customer.findByIdAndDelete(req.params.id)
        res.status(200).json({
            sucess:true,
            message:"the customer deleted sucessfully"
        })
        
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:error.message
        })
        
    }

 }


 module.exports={
    createCustomer,
    getAllCustomer,
    getCustomer,
    deleteCustomer
 }