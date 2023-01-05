//include HTTP library from node
const http = require("http");

//include MainController from local file
const MainController = require("./app/controllers/MainController.js"); // we need to execute/call the MainControler function somehow
const MainCtrl = new MainController (); //we defined the MainCtrl as a new instance of the main controller class

//#1
const server = http.createServer(function(req, res) {
    
    //need to call controller
    MainCtrl.main(req, res);
});

//#2
// const server = http.createServer(MainCtrl.main); //this is (the main) the function from the MainController.js

const port = 3000; 
server.listen(port, function () { 
    console.log(`Server running at http://localhost:${port}`);   
});
