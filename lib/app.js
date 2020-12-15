const net = require("net");
const parseRequest = require("./utils/parseRequest");
const createResponse = require("./utils/createResponse");
const htmlResponse = require("./utils/htmlResponse");

const app = net.createServer((socket) => {
  socket.on("data", (data) => {
    // console.log(data.toString());
    const request = parseRequest(data.toString());

    // plain text "hi"
    if (request.path === "/" && request.method === "GET")
      socket.write(
        createResponse({
          body: "hi",
        })
      );

    // status code 200 and plain text with the request body
    if (request.path === "/echo" && request.method === "POST")
      socket.write(
        createResponse({
          body: request.body,
          status: "200 OK",
          contentType: "text/plain",
        })
      );

    // HTML with an h1 and the word red
    if (request.path === "/red" && request.method === "GET")
      socket.write(
        createResponse({
          body: htmlResponse("red"),
          status: "200 OK",
          contentType: "text/plain",
        })
      );

    // HTML with an h1 and the word red
    if (request.path === "/green" && request.method === "GET")
      socket.write(
        createResponse({
          body: htmlResponse("green"),
          status: "200 OK",
          contentType: "text/plain",
        })
      );

    // HTML with an h1 and the word red
    if (request.path === "/blue" && request.method === "GET")
      socket.write(
        createResponse({
          body: htmlResponse("blue"),
          status: "200 OK",
          contentType: "text/plain",
        })
      );
  });
});

module.exports = app;
