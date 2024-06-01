const express = require('express');
const Router = express.Router();
const cors = require('cors');
const { getrepo } = require('./controller/getrepos.controller');
const { login } = require('./controller/login.controller');
const { callback } = require('./controller/callback.controller');
const { userdetails } = require('./controller/getuserdetails.controller');
const { accessMiddleware } = require('./middleware/accesstoken.middleware');
const { update } = require('./controller/update.controller');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    mode: "no-cors"
}));

app.use(express.json());
app.use(cookieParser())
// Redirect users to GitHub for authorization
app.get('/login', login);

// Callback URL for GitHub to redirect users back to
app.get('/callback', callback);

// // Gets the  details of the users 
app.get('/getuser', userdetails);

// // Gets the  all the Repos of the user
app.get('/getrepo', getrepo)
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

