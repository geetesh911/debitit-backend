const mongoose = require("mongoose");

const ExpenseSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  payment: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Expense = mongoose.model("expense", ExpenseSchema);
exports.ExpenseSchema = ExpenseSchema;
exports.Expense = Expense;
