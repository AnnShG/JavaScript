require('dotenv').config()

const express = require('express');
const app = express();

//const bcrypt = require('bcrypt');

app.use(express.json());

const jwt = require('jsonwebtoken')

const posts = [
    {
        username: "Jim",
        title: "Jim's posts",      
    },
    {
        username: "Bob",
        title: "Bob's posts",      
    }
]

// GET all posts
app.get('/posts',  authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name));
})

// function that will aunthantificate our token json
function authenticateToken (req, res, next) {
    const  authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split('')[1];
    /**  
     * we have space after split('') because 'split' should split
     * 'Bearer', space and access token in requset.rest and take the 
     *  the access token under 1st index, but not the 'bearer'
     * that is under 0 index
     * 
    */
    if (!token) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user
        next()
    }) // next - move forward to the next function
}

const port = 3000;
app.listen(port, () => {
    console.log(`server running at http://localhost:${3000}`);
}) //resource server running on port 3000