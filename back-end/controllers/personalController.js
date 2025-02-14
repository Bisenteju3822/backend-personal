const ExpenseModel = require("../models/expenseModel");

const insertExpense = async (req, res) => {
  const { amount, category, date, description, paymentMethod, notes, account, merchant } = req.body;
  await ExpenseModel.create({
    amount: amount,
    category: category,
    date: date,
    description: description,
    paymentMethod: paymentMethod,
    notes: notes,
    account: account,
    merchant: merchant
  });
  res.json({ msg: "Expense successfully saved!" });
};

const displayExpenses = async (req, res) => {
  const expenseData = await ExpenseModel.find();
  res.send(expenseData);
};

const searchExpense = async (req, res) => {
  const { amount } = req.body;
  const data = await ExpenseModel.find({ amount: amount });
  res.send(data);
};

const deleteExpense = async (req, res) => {
  const { expenseId } = req.query;
  await ExpenseModel.findByIdAndDelete(expenseId);
  res.send("Expense deleted!");
};

const editExpenseShow = async (req, res) => {
  const { expenseId } = req.body;
  const data = await ExpenseModel.findById(expenseId);
  res.send(data);
};

const editExpenseSave = async (req, res) => {
  const { _id } = req.body;
  await ExpenseModel.findByIdAndUpdate(_id, req.body);
  res.send("Expense successfully updated!");
};

module.exports = {
  insertExpense,
  displayExpenses,
  searchExpense,
  deleteExpense,
  editExpenseShow,
  editExpenseSave,
};
