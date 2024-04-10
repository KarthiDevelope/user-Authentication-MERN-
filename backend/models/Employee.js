import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema);

export default EmployeeModel;