const http = require("http"); //This is the first step to create a server
const fs = require("fs");
const myserver = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  //To create a server we use createServer and create a server
  const log = `${Date.now()}: ${req.url} New Request Recieved \n`;
  fs.appendFile("./log.text", log, (err, data) => {
    /* res.end("Hello from the server") */ //This is the response displayed on the server

    switch (req.url) {
      case "/":
        res.end("This is the Home Page");
        break;
      case "/about":
        res.end("Hi my name is Sarthak Singh");
        break;
      default:
        res.end("The Page you are at is not defined");
    }
  });
});

myserver.listen("8000", () => {
  //This is done to listen to the port at 8000
  console.log("Server Started");
});
