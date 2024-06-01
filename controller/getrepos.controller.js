const { response } = require("express");

const getrepo = async (req, res) => {
    const token = req.query.token;
    const user = req.query.user;
    const options = {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    await fetch(`https://api.github.com/search/repositories?q=user:${user}`, options)
        .then(response => response.json())
        .then(data => res.send(data))
}

module.exports = { getrepo }