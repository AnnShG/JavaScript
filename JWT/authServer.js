//now we can create a separate server for authentication and move all authentication code there
require('dotenv').config()

const express = require('express');
const app = express();

app.use(express.json());
const jwt = require('jsonwebtoken')


let refreshTokens = []

// login user
app.post('/login', (req, res) => {
    // authentification from part 1 should go here


    const username = req.body.username;
    const user = { name: username};

    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    //now we need to store our refresh token somewhere (in an array)
    
    refreshTokens.push(refreshToken);
    res.json({ accessToken: accessToken, refreshToken: refreshToken }) //return

    //next we should create our ACCESS_TOKEN_SECRET in .env
})

//let's make use of the refresh token
app.post('/token', (req, res) => {
    const refreshToken = req.body.accessToken
    if (!refreshToken) return res.sendStatus(401)
    if (!refreshToken.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ name: user.name })
        res.json({ accessToken: accessToken})
    } )
});

// we need a way to log out our user
// we send a delete request to remove out token from storage
app.delete('/logout', (req, res) => {
    refreshToken = refreshTokens.filter ( token => token !== req.body.token)
    res.sendStatus(204)
})

// create a function that generates an access token
function generateAccessToken (user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60s'});
}


const port = 4000;
app.listen(port, () => {
    console.log(`server running at http://localhost:${4000}`);
})