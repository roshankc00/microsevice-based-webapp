const mongoose=require('mongoose')
// let MONGO_URL="mongodb://127.0.0.1:27017/bookservice"
const connectDb=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("connected to the book service database")
    }).catch(()=>{
        console.log("unable to connect the database")
    })
}

module.exports=connectDb