const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");


//env config
dotenv.config()

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

const PORT=4040
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`.yellow.bold)
})