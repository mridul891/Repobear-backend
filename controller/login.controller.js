
const dotenv = require("dotenv")

dotenv.config({
    path: ".env"
})
const CLIENT_ID = process.env.CLIENT_ID;
const SCOPES = process.env.SCOPES;
const REDIRECT_URI = process.env.REDIRECT_URI;
const login = (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}`);
};

module.exports = { login }