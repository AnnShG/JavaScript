const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// const MainController = require("./app/controllers/MainController");
const StudentsController = require("./app/controllers/StudentsController");

const StudentsCtrl = new StudentsController();

// http.createServer()
const server = express();

/* EXPLANATION!!
IF we type after the slash students or courses, then we will see this word on the page
If we type something another, that we didn`t clarified below, there will be - Not Found
If we will not add anything after the slash, there will be - Home.
*/

// const routes = {
//     'students': 'Students',
//     'courses': 'Courses',

// };

// // localhost: 3000/anything ==> req.page = 'anything'
// // localhost: 3000/qwerty ==>
// server.get("/:page", function (req, res) {
//     const { page } = req.params;
//     const returnData = routes[page] ?? 'Not Found';
//     res.send(returnData);
// });

// set templating engine
server.set("view engine", "ejs");
// change default location of templating engine views
server.set("views", path.resolve(__dirname, "app/views"));
 
//'use' is the same as if there would be - 'get'
/* what 'express.static' ectually does?
   it takes the folder 'assets' it goes through all the contents inside the 'assets', and whatever we have under it, for examle 'main.js'
   --> server.uses("assets/main.css", function (req, res) {return the file})
   -->"assets/main.js"
   so if we want serve publicaly available files then we don't need to write 20 route rules... 
*/
server.use(express.static(path.resolve(__dirname, "assets")));  //use(express.static("") this says that whatever we will add to this route will be a static file

//routing
// server.use ("*", MainController);

// used to parse req.body for POST,PUT requests
server.use(bodyParser.urlencoded({ extended: false }));

// routing
// server.use("*", MainController);
server.get("/", function (req, res) {
    //res.send("Home");
    res.render("pages/index1", {content: "This is home"}); 
});

// url =>"/students/1" ==> render only student with id=1
// server.get("/students", StudentsController);

// /students
// /students/2

// server.get("/students", StudentsController);
// server.get("/students/*", StudentsController);
server.get("/students/create", StudentsCtrl.renderForm);
server.get("/students/:studentId?", StudentsCtrl.main);
server.post("/students/create", StudentsCtrl.createStudent);

server.use("*", function (req, res) { //use - all requests methods will be accepted if all paramentres mathes
    //* - everything is accepted
    res.render("page/error"); //fallback
});

const port = 3000;
//start server
server.listen(port, function () { //this is fallback function
     console.log(`Server running at http://localhost:${port}`);
    });
