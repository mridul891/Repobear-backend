
const callback = async (req, res) => {
    console.log("reached")
    const code = await req.query.code;
    console.log(code)
    // Exchange code for access token
    try {
        const { data } = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: code,
            redirect_uri: REDIRECT_URI
        }, {
            headers: {
                accept: 'application/json'
            }
        });

        const accessToken = data.access_token;

        // Use access token to make authenticated requests
        console.log(accessToken)

        res.send(userInfo.data);
        
    } catch (error) {
        res.status(500).send('Error exchanging code for access token');
    }
}

module.exports = { callback }