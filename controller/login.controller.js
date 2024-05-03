
const CLIENT_ID = '5db7bf02bf06b827e134';
const CLIENT_SECRET = 'cad66077ad69a78d1667d0325748dae999821b9e';
const REDIRECT_URI = 'http://localhost:3000/callback';
const SCOPES = 'user ,repo ,repo:private';

const login = async (req, res) => {
    await res.redirect(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}`);
};

module.exports = { login }