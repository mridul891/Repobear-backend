const { response } = require("express");

const getrepo = async (req, res) => {
    const token = req.query.token;
    const options = {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    await fetch('https://api.github.com/user/repos', options)
        .then(response => response.json())
        .then(data => res.send(data))
}

module.exports = { getrepo }