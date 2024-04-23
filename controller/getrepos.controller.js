const dotenv = require('dotenv')
dotenv.config({
    path: ".env"
})
const getrepo = async (req, res) => {

    const api_key = process.env.ACCESS_TOKEN
    const options = {
        method: ["GET"],
        headers: {
            "Authorization": `Bearer  ${api_key}`,
            "Content-Type": "application/json"
        },
    }
    try {
        const response = await fetch('https://api.github.com/search/repositories?q=user:mridul891', options)
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports = { getrepo }