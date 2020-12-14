// parseRequest takes a rawRequest (an HTTP request message). It should take that rawRequest and return an object with body, method, and path from the rawRequest.

module.exports = (rawRequest) => {
  const body = rawRequest.split("\n").pop();
  const method = rawRequest.split("\n")[0].split(" ")[0];
  const path = rawRequest.split("\n")[0].split(" ")[1];

  if (body[0] === "{") {
    return { body, method, path };
  } else {
    return { method, path };
  }
};
