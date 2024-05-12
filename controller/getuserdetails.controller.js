const dotenv = require("dotenv")
const { response } = require("express")
const { User } = require('../models/UserSchema')
const axios = require("axios")
dotenv.config({
    path: ".env"
})


const userdetails = async (req, res) => {
    const token = req.token;
    const options = {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    axios.get("https://api.github.com/user", options)
        .then(response => res.send(response.data))
        .then(async (data) => {
            const existinguser = await User.findOneAndUpdate({
                GithubHandle: data.login,
            }, { AccessToken: token }, { new: true })
            if (existinguser) {
                return res.send(data)
            }
            const user = await User.create({
                GithubHandle: data.login,
                AccessToken: token
            })
            res.send(data)
        }
        );
}

module.exports = { userdetails }