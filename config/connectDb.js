const mongoose=require('mongoose')
const colors=require('colors')
const dotenv = require("dotenv");
dotenv.config();

const connectDb=async()=>{

    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log(`Server Running on ${mongoose.connection.host}`.bgGreen)
    } catch (error) {
        console.log(`${error}`.bgRed)
    }
}

module.exports=connectDb;