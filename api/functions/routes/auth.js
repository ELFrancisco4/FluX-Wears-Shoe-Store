const express = require("express")
const firebaseInstance = require("../helpers/firebase")
const authRouter = express.Router()

authRouter.post("/login", async (req, res) => {
    const {
        email,
        password
    } = req.body
    try {
        await firebaseInstance.signIn(email, password)
        res.status(201).json({
            success: true,
            message: "User created successfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong, try again later"
        })
    }
})

module.exports = {
    authRouter
}