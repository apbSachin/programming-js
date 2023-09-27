//how to create an api
const http = require("http");
const data = require("./data");
//createServer is a built-in http module that is used to create http server
//this below function gets called for each incoming http request
http.createServer((req, res) => {
    //write the response header (e.g :content-type)
    res.writeHead(200, { "Content-Type": "application/json" });
    //write the response body
    res.write(JSON.stringify(data));
    //end the response body
    res.end();
  })
  .listen(4200);
