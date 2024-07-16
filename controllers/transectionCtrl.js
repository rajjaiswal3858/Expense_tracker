const transectionModel = require("../models/transectionModel");
const moment=require('moment')
const getAllTransection = async (req, res) => {
  try {
    const {frequency,seleectedDate,type}=req.body;
    const transections = await transectionModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: seleectedDate[0],
              $lte: seleectedDate[1],
            },
          }),
      userid: req.body.userid,
      ...(type!=='all' && {type})

    });
    console.log(transections);
    res.status(200).json(transections);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const addTransection = async (req, res) => {
  try {
    // const newTransection = new transectionModel(req.body);
    const newTransection = new transectionModel(req.body);
    await newTransection.save();
    res.status(201).send("Transection Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const editTransection=async(req,res)=>{
  try {
    await transectionModel.findOneAndUpdate({_id:req.body.transectionId},
      req.body.payload
    )
    res.status(200).send('Edit succesfully')
    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
const deleteTransection= async(req,res)=>{
  try {
    await transectionModel.findOneAndDelete({_id:req.body.transectionId})
    res.status(200).send('Transaction Deleted')
  } catch (error) {
    console.log(error)
  }
}


module.exports = { getAllTransection, addTransection ,editTransection,deleteTransection};