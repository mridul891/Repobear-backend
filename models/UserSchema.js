const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://pandeymridulwork:mridul891@repopanda.ltrqlr8.mongodb.net/")
const UserSchema = new mongoose.Schema({
    GithubHandle: String,
    AccessToken: String
})

const User = mongoose.model("User", UserSchema)

module.exports = { User }