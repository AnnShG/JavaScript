const express = require("express");// access to the package
const path = require("path"); //path library from node.js
const bodyParser = require("body-parser");

// const MainController = require("./app/controllers/MainController");
const StudentsController = require("./app/controllers/StudentsController");

const StudentsCtrl = new StudentsController();

// http.createServer()
const server = express(); // to initiate the express app

// set templating engine - ejs
server.set("view engine", "ejs");
// change default location of templating engine views
server.set("views", path.resolve(__dirname, "app/views"));
 
//'use' is the same as if there would be - 'get'
server.use(express.static(path.resolve(__dirname, "assets")));  //use(express.static("") this says that whatever we will add to this route will be a static file

//routing
// server.use ("*", MainController); server use for everything in mainController

// used to parse req.body for POST,PUT requests
server.use(bodyParser.urlencoded({ extended: false }));

// routing
// server.use("*", MainController);
server.get("/", function (req, res) {
    //res.send("Home");
    res.render("pages/index1", {content: "This is home"}); 
});

// server.get("/students", StudentsController);
// server.get("/students/*", StudentsController);
server.get("/students/create", StudentsCtrl.renderForm);
server.get("/students/:studentId?", StudentsCtrl.main);
server.post("/students/create", StudentsCtrl.createStudent);

server.use("*", function (req, res) { //use - all requests methods will be accepted if all paramentres mathes
    //* - everything is accepted
    res.render("page/error"); //fallback
});

//start server
const port = 3000;
server.listen(port, function () { //this is fallback function
     console.log(`Server running at http://localhost:${port}`);
    });
