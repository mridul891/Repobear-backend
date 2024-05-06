const express = require('express');
const axios = require('axios');
const Router = express.Router();
const cors = require('cors');
const { getrepo } = require('./controller/getrepos.controller');
const { login } = require('./controller/login.controller');
const { callback } = require('./controller/callback.controller');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    mode: "no-cors"
}));

app.use(express.json())

// Redirect users to GitHub for authorization
app.get('/login', login);

// Callback URL for GitHub to redirect users back to
app.get('/callback', callback);

app.get('/get-repo', getrepo)
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
