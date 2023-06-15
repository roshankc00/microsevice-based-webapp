const express=require('express')
const { createCustomer, getAllCustomer, getCustomer, deleteCustomer } = require('../controllers/customerCtrl')
const router=express.Router()

router.post('/customer/create',createCustomer)
router.get('/customers',getAllCustomer)
router.get('/customer/:id',getCustomer)
router.delete('/customer/:id',deleteCustomer)


module.exports=router