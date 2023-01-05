//import the file system library from node
const fs = require("fs");
//import path helper library from node
const path = require("path");
class MainController {
    //constructor() {}
    //the path to the html files
    views = "../views/";/*views is a variable*/ 

    //main method whih will work as the main controller for our routing
    main(req, res) {  //function
        const url = req.url;
        let templatePath = `index1.html`;
        
        // if (url === "/") ==> "index.html";

        if (url === "/students") { //if the url matches the students, then ...
        // if (url === "/students/subjects") {  
            //here whe try to access the html file 
            templatePath = `students.html`;
            } else if (url.endsWith(".css")) {
                //localhost:3000/main.css
                const cssPath = path.resolve(__dirname, `../../${url}`); //put this url as a string
            fs.access(cssPath, function (error) {
                if (error) {
                    res.end();
                } else {
                    res.writeHead(200, {
                        "Content-Type": "text/css",
                    });
                    const fileStream = fs.createReadStream(cssPath, "UTF-8");
                    fileStream.pipe(res);
                }
            });
            return;
        // }

            //we should use the path helper library
            const resolvedPath = path.resolve( //this path resolves everything to correct the path
                __dirname, this.views, templatePath
                ); //dirname - a global variable in node, which indicates the rude path of node process 
                

            fs.access(resolvedPath, function (error) {
                if (error) {
                    res.writeHead(404, {
                        "Content-Type": "text/plain",
                    });
                    res.end("No file found");
                } else {
                    //happy path
                    const filestream = fs.createReadStream(resolvedPath);/*callback stream automaticly*/
                    filestream.pipe(res); //if everything is good, it returns to html file
                }
            });
        
        }; 
    }
}
module.exports = MainController; //we call the const "MainController" that is in 03_simpleRouting/server.js 

