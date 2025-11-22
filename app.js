const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

// Get Directory
const server = http.createServer(function (req, res) {
  let pathNameFull = req.url;

  pathNameObj = url.parse(pathNameFull, true);

  pathName = pathNameObj.pathname;

  if (pathName === "/" || pathName === '/home' || pathName === "/page") {
    const htmlPath = path.join(__dirname, "templates", "page.html");
    const fileStream = fs.createReadStream(htmlPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    fileStream.pipe(res);
  }
  else if(pathName === "/about"){
    const htmlPath = path.join(__dirname, "templates", "about.html");
    const fileStream = fs.createReadStream(htmlPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    fileStream.pipe(res);
  }
  else if(pathName === "/contact"){
    const htmlPath = path.join(__dirname, "templates", "contact.html");
    const fileStream = fs.createReadStream(htmlPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    fileStream.pipe(res);
  }
  else if (req.url.match("[.]png$")) {
    const imgPath = path.join(__dirname, "templates/images", "js-book.png");
    const fileStream = fs.createReadStream(imgPath);
    res.writeHead(200, { "Content-Type": "image/png" });
    fileStream.pipe(res);
  } else if (req.url.match("[.]html$")) {
    const htmlPath = path.join(__dirname, "templates", req.url);
    const fileStream = fs.createReadStream(htmlPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    fileStream.pipe(res);
  } else if (req.url.match("[.]css$")) {
    const cssPath = path.join(__dirname, "templates", req.url);
    const fileStream = fs.createReadStream(cssPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page not found</h1>");
  }
});
server.listen(3000);
console.log("Server is running at port 3000");
