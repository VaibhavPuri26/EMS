const express = require("express");
const {
  addTransaction,
  getAllTransaction,
} = require("../controllers/transactionctrl");

//router object
const router = express.Router();

//routes
//add transaction POST MEthod
router.post("/add-transaction", addTransaction);

//get transctions
router.post("/get-transaction", getAllTransaction);

module.exports = router;