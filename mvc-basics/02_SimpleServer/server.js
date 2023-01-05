// 1. include HTTP library from node
const { RSA_NO_PADDING } = require("constants");
const http = require("http");
//5. include file system library from node
const fs = require("fs"); /* fs - file system library*/

//2. NOW WE WILL CREATE 'CALLING METHOD FROM HTTP LIBRARY'
//createServer is a method, req -request; res - response
const server = http.createServer(function(req, res) {

    //1# hardcoded string:
// req.url == "/", "/students", "students/1"
//reg.method = "GET", "POST"
//reg.body - only post POST , PUT 

// res.writeHead is a statisc code

//res.writeHead(200, {'Content-Type': 'text/plain'});
//res.write("Hello there!");
//res.write("<html>......."); // <-- WRONG
//res.end();

//4. second option how to read from the index1/html is to include file system library from the node

    //2# send html file content to this server.js file
// fs.readFile("./index2.html", function (error, data) {
    //./ - current directory
//     if (error) {
//         //sad path/ wrong html name
//         res.writeHead(404, {
//             'Content-Type': 'text/plain',
                //'Content-Length': data.length,
//         });
//         res.end("can't read the file");
//     } else {
//         //happy path
//         res.writeHead(200, {
//             'Content-Type': 'text/html',
//         });

//         /*res.write(data);
//         res.end();*/
//         //or to miss 'res.write(data)' and write: res.end(data);
//         res.end(data);
//     }
// });
    //this is server definition, inside the braces

    //3# send html to response as a stream
    //in order safely read a content in a stream we should check if we have the access to this file
    fs.access("./index1.html", function (error) {
        if (error) {
            res.writeHead(404, {
                "Content-Type": "text/plain",
            });
            res.end("No file found");
        } else {
            //happy path
            const filestream = fs.createReadStream("./index1.html" );  //callback stream automaticly
            filestream.pipe(res); 
        }
        });
});

//3. then we will try to call, what we did recently
const port = 3000; /*port   in which the server will run and listen to user request*/
server.listen(port, function () { /*event loop, it says - I need to listen on 
    my server if there is any request from the user. This server will
    start this loop of instructions, which prohibits note to execute to all of them
    and then just stop*/

    console.log(`Server running at http://localhost:${port}`);
});
//you can type almost any number on port, but there are some exceptions..