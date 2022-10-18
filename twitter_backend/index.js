import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import e from "cors"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/twitter", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Twitter DB connected")
}
)
const userSchema = new mongoose.Schema({
    email: String,
    password: String
})
const User = new mongoose.model("user", userSchema)


app.post("/login", (req, res) => {

    const { email, password } = req.body
    const user = new User({
        email: email,
        password: password
    })
    User.findOne({ email: email }, (err, user) => {
        if (user) {

            if (password === user.password) {

                res.send({ message: "Login is Successful", user: user })
            } else {
                res.send({ message: "Password is incorrect" })
            }

        } else {
            res.send({ message: "User is not registered." })
        }
    })
})

app.listen(9000, () => {
    console.log("BackEnd Started at server 9000")
})