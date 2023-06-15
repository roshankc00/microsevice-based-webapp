const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"]
    },
    author:{
        type:String,
        required:[true,"title is required"]
    },
    numberOfPages:{
        type:Number,
        required:[true,"numberOfPages is required"]
    },
    publisher:{
        type:String,
        required:[true,"publisher us required"]
    }
    
},{timestamps:true})

const Book=mongoose.model('Book',bookSchema)
module.exports=Book


