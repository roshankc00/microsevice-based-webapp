const { default: mongoose } = require("mongoose");
const Order = require("../models/order.model");
const axios = require("axios");
const { URL } = require("../../../constant");
const createOrder = async (req, res) => {
  try {
    const { customerid, BookId, initialDate, deliveryDate } = req.body;
    const cusData={
        customerid:new mongoose.Types.ObjectId(customerid),
        BookId:new mongoose.Types.ObjectId(BookId),
        initialDate:new Date(initialDate),
        deliveryDate:new Date(deliveryDate)
    }
        const order = await Order.create(cusData);
    res.status(200).json({
      sucess: true,
      message: "order has been created",
      order
    });
  } catch (error) {
    res.status(500).json({
      sucess: true,
      message: error.message,
    });
  }
};
const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    
    if(order){
        axios.get(`${URL}/book/${order.BookId}`).then((data)=>{
            let book=data.data      
            res.status(200).json({
                sucess:true,
                data:[{book:book
                ,customer:book}]
                
            })      
        }).catch((err)=>console.log(err))

        // for customers
        axios.get(`${URL}/customer/${order.customerid}`).then((data)=>{
            customer=data.data
            
        }).catch((err)=>console.log(err))
        

    }else{
        res.status(404).json({
            sucess:false,
            message:"order not found "
        })
    }
  } catch (error) {
    res.status(500).json({
      sucess: true,
      message: error.message,
    });
  }
};
const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json({
      sucess: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      sucess: true,
      message: error.message,
    });
  }
};

// delete order
const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({
      sucess: true,
      message: "order has been deleted sucessfully",
    });
  } catch (error) {
    res.status(500).json({
      sucess: true,
      message: error.message,
    });
  }
};
module.exports = {
  createOrder,
  getOrder,
  getAllOrder,
  deleteOrder,
};
