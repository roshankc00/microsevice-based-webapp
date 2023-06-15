const {createbook, getBook, getAllBooks, deleteBook}=require('../controllers/Bookcontroller')
const express=require('express')
const router=express.Router()

router.post('/book/create',createbook)
router.get('/book/:id',getBook)
router.get('/books',getAllBooks)
router.delete('/book/:id',deleteBook)
module.exports=router 