const transactionModel = require("../models/transactionmodel");

const getAllTransaction = async (req, res) => {
  try {
    const transactions = await transactionModel.find({
      userid: req.body.userid,
    });
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(erorr);
  }
};

const addTransaction = async (req, res) => { 
  try {
    // const newTransaction = new transactionModel(req.body);
    const newTransaction = new transactionModel(req.body);
    console.log('ammi');
    await newTransaction.save();
    res.status(201).send("Transaction Created");
  } catch (error) {
    
    res.status(500).json(error);
  }
};

module.exports = { getAllTransaction, addTransaction };