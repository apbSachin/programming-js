//global module: which we are not importing or bydefault modules
console.log("dont print more");

//nonglobal : we are importing some outside modules
const fs = require("fs");
fs.writeFileSync("hello.js", "hello");

//createSever(request,response): to use createServer we need to require http server
//by taking response from createserverwe can use all responses methods
//once we use method donot forgot to end the response 
//than pass localhost to run your application
const http = require("http");
http
  .createServer((req, resp) => {
    resp.write("hello world");
    resp.end();
  })
  .listen(8080);
