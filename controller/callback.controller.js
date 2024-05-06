const dotenv = require("dotenv")
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
dotenv.config({
    path: ".env"
})

const callback = async (req, res) => {
    const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + req.query.code;
    console.log(params)
    const options = {
        method: "POST",
        headers: {
            "Accept": "application/json"
        }
    }
    const alpha = await fetch("https://github.com/login/oauth/access_token" + params, options).then((response) => { return response.json() }).then((data) => res.json(data))
}

module.exports = {
    callback
}