const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  position: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
