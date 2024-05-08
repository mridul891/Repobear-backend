const dotenv = require('dotenv');
const { User } = require('../models/UserSchema');
const { response } = require('express');
dotenv.config({
    path: ".env"
})
const getrepo = async (req, res) => {

    const token = req.token;

    const options = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    }
    try {
        // const user = await User.findOne({
        //     AccessToken : token
        // })
        // console.log(user)
        await fetch(`https://api.github.com/search/repositories?q=user:${req.query.username}`, options)
            .then(response => response.json())
            .then(data => res.send(data))
    } catch (error) {
        console.log(error)
    }
}
module.exports = { getrepo }