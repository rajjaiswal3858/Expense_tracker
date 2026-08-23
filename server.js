const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");
const path = require("path");

//env config
dotenv.config()

//connect db
connectDb();
 
//rest object
const app=express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//user routes
app.use("/api/v1/users", require("./routes/userRoute"));

//transection routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")))
app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})
const PORT=4040
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`.yellow.bold)
})

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Expense Tracker App</h1>")
})  