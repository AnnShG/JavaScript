const http = require('http');
const express = require('express');
//const cors = require('cors'); // cors package

//our items 
const itemsRouter = require('./routes/items');

const app = express();
//all that we will use for our app
app.use(express.json());
app.use(cors({ origin: 'http://localhost:8080' }));
app.use('/items', itemsRouter);

app.use('/', function(req, res) {
    res.send(res)
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.log(`Server listening on port ${port}`);