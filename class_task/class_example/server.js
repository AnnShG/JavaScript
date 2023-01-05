// include HTTP library from node
const { RSA_NO_PADDING } = require("constants");
const http = require("http");
 //include file system library from node
const fs = require("fs"); /* fs - file system library*/


const server = http.createServer(function(req, res) {

        fs.access("./classEx.html", function (error) {
            if (error) {
                res.writeHead(404, {
                    "Content-Type": "text/plain",
                });
                res.end("No file found");
            } else {
                //happy path
                const filestream = fs.createReadStream("./classEx.html" );/*callback stream automaticly*/
                filestream.pipe(res); 
            }
            });
    
});
const port = 3002;
server.listen(port, function () { 
    console.log(`Server running at http://localhost:${port}`);
});
