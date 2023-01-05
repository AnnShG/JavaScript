// 1. include HTTP library from node
const { RSA_NO_PADDING } = require("constants");
const http = require("http");
//5. include file system library from node
const fs = require("fs"); /* fs - file system library*/

//2. NOW WE WILL CREATE 'CALLING METHOD FROM HTTP LIBRARY'
//createServer is a method, req -request; res - response
const server = http.createServer(function(req, res) {

    // send html to response as a stream
    //in order safely read a content in a stream we should check if we have the access to this file
        fs.access("./classes.html", function (error) {
            if (error) {
                res.writeHead(404, {
                    "Content-Type": "text/plain",
                });
                res.end("No file found");
            } else {
                //happy path
                const filestream = fs.createReadStream("./classes.html" );/*callback stream automaticly*/
                filestream.pipe(res); 
            }
            });
    
});

//3. then we will try to call, what we did recently
const port = 3001; /*port   in which the server will run and listen to user request*/
server.listen(port, function () { /*event loop, it says - I need to listen on 
    my server if there is any request from the user. This server will
    start this loop of instructions, which prohibits note to execute to all of them
    and then just stop*/
    console.log(`Server running at http://localhost:${port}`);
    // or like this: console.log(`Server running at http://localhost + port`);
});
//you can type almost any number on port, but there are some exceptions..