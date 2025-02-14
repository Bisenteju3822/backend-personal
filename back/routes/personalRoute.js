const express = require("express");
const route = express.Router();
const PersonalController = require("../controllers/personalController");

route.post("/insert", PersonalController.insertExpense);
route.get("/display", PersonalController.displayExpenses);
route.post("/search", PersonalController.searchExpense);
route.get("/delete", PersonalController.deleteExpense);
route.post("/editdatashow", PersonalController.editExpenseShow);
route.post("/editdatasave", PersonalController.editExpenseSave);

module.exports = route;
