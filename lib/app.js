const net = require("net");
// const parseRequest = require("./utils/parseRequest");
// const createResponse = require("./utils/createResponse");

const app = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log(data.toString());
    // const request = parseRequest(data.toString());
    socket.write(
      `
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 25 Jun 2019 15:57:17 GMT
Accept-Ranges: bytes
Content-Length: ${'{"name":"spot", "age":5, "weight":"20 lbs"}'.length}
Content-Type: application/json

{"name":"spot", "age":5, "weight":"40 lbs"}
`.trim()
    );
  });
});

module.exports = app;

/*
    createResponse({
      body: "Not Found",
      status: "404 Not Found",
      contentType: "text/plain",
    })
*/
