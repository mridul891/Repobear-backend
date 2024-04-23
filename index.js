const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const { getrepo } = require("./controller/getrepos.controller");
const env = require('dotenv')
const app = express();
const port = 3000;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

app.use(cors());
app.use(bodyParser.json());


app.get('/get-repo', getrepo)
app.listen(port, () => {
    console.log(`The port is running at ${port}`);
})