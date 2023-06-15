const mongoose=require('mongoose')

const customerSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"name field is required"]
    },
    age:{
        type:Number,
        required:[true,"age field is required"]
    },
    address:{
        type:String,
        required:[true,"address is required"]
    }
},{timestamps:true})


const Customer=mongoose.model('Customer',customerSchema)
module.exports=Customer