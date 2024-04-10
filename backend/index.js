import express from "express";
import cors from "cors";
import mongoose from "mongoose"
import { PORT, MongoDB } from "./config.js";
import EmployeeModel from "./models/Employee.js";

const app = express();

app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success")
                } else {
                    res.json("password is incorrect")
                }
            } else {
                res.json("No record Existed")
            }
        })
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})


mongoose.connect(MongoDB)
    .then(() => {
        console.log("App is Connected to DB")
        app.listen(PORT, () => {
            console.log("Server is Running..")
        });
    })
    .catch((err) => {
        console.log(err)
    })


