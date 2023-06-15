const express=require('express')
const { createOrder, getAllOrder, getOrder, deleteOrder } = require('../controllers/orderController')

const router=express.Router()

router.post('/order/create',createOrder)
router.get('/orders',getAllOrder)
router.get('/order/:id',getOrder)
router.delete('/order/:id',deleteOrder)

module.exports=router