const dotenv = require("dotenv")
const { response } = require("express")
const { User } = require('../models/UserSchema')
const axios = require("axios")
dotenv.config({
    path: ".env"
})
const userdetails = async (req, res) => {
    const token = req.query.token;
    const options = {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    await fetch('https://api.github.com/user', options)
        .then(response => response.json())
        .then(data => res.send(data))
}

module.exports = { userdetails }