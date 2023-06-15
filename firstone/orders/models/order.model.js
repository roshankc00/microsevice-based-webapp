const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({
    customerid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    BookId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    initialDate:{
        type:Date,
        required:true
    },
    deliveryDate:{
        type:Date,
        required:true
    }

})



const Order=mongoose.model("Order",orderSchema)
module.exports=Order