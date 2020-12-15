// parseRequest takes a rawRequest (an HTTP request message). It should take that rawRequest and return an object with body, method, and path from the rawRequest.

module.exports = (rawRequest) => {
  const [method, path] = rawRequest.split(" ");
  const [, body] = rawRequest.split("\r\n\r\n");
  if (body) {
    return { method, path, body };
  } else {
    return { method, path };
  }
};
