const express = require('express');
const axios = require('axios');
const Router = express.Router();
const querystring = require('querystring');
const cors = require('cors');
const { getrepo } = require('./controller/getrepos.controller');
const { login } = require('./controller/login.controller');
const { callback } = require('./controller/callback.controller');
const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_ID = '5db7bf02bf06b827e134';
const CLIENT_SECRET = 'cad66077ad69a78d1667d0325748dae999821b9e';
const REDIRECT_URI = 'http://localhost:3000/callback';
const SCOPES = 'user ,repo ,repo:private';

app.use(cors({
    mode: "no-cors"
}));
Router.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.send('cors problem fixed:)');
});
// Redirect users to GitHub for authorization
app.get('/login', login);

// Callback URL for GitHub to redirect users back to
app.post('/callback', callback);

app.get('/get-repo', getrepo)
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
