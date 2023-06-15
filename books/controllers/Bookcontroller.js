const Book = require("../models/book.model")

const getBook=async(req,res)=>{
    try {
        const book=await Book.findById(req.params.id)
        if(!book){
           return  res.status(400).json({
                sucess:false,
                message:'book not found'
            })
        }
        res.status(200).json({
            sucess:true,
            book
        })
    } catch (error) {
        return res.status(500).json({
            sucess:false,
            messaage:error.messaage
        })
        
    }
    

}
const createbook=async(req,res)=>{
    try {
        const {title,author,numberOfPages,publisher}=req.body         
        const book=await Book.create({
            title,author,numberOfPages,publisher
        })
        return res.status(200).json({
            sucess:true,
            book
        })
        
    } catch (error) {
        res.status(500).json({
            sucess:false,
            messaage:error.messaage
        })
        
    }

}
const getAllBooks=async(req,res)=>{
    try {
        const books=await Book.find({})
        res.status(200).json({
            sucess:true,
            books
        })
        
    } catch (error) {
        res.status(500).json({
            sucess:false,
            messaage:error.messaage
        })
        
    }
    
}
 
const deleteBook=async(req,res)=>{
    try {
        const deleteBook=await Book.findById(req.params.id)
        if(deleteBook){
            const delme=await Book.findByIdAndDelete(req.params.id)
            res.status(200).json({
                sucess:true,
                message:"deleted sucessfully !"
            })
        }else{
            res.status(400).json({
                sucess:false,
                message:"unable to delete the book!"
            })
            
        }
        
    } catch (error) {
        res.status(500).json({
            sucess:false,
            messaage:error.messaage
        })
        
    }
}

module.exports={
    getAllBooks,
    getBook,
    createbook,
    deleteBook
}