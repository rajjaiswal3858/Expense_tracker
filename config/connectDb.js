const mongoose=require('mongoose')
const colors=require('colors')
const connectDb=async()=>{

    try {
        await mongoose.connect('mongodb+srv://rajjaiswal2002fairwealth:Byrk3dkhtKqfoaQd@mongodbproject.masddwh.mongodb.net/Expense-App')
        console.log(`Server Running on ${mongoose.connection.host}`.bgGreen)
    } catch (error) {
        console.log(`${error}`.bgRed)
    }
}

module.exports=connectDb;