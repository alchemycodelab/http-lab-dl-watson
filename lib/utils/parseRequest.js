// parseRequest takes a rawRequest (an HTTP request message). It should take that rawRequest and return an object with body, method, and path from the rawRequest.

module.exports = (rawRequest) => {
  const length = rawRequest.split("\n").length;
  const method = rawRequest.split("\n")[0].split(" ")[0];
  const path = rawRequest.split("\n")[0].split(" ")[1];

  // if req does have a body
  if (length === 5) {
    const body = rawRequest.split("\n").pop();
    return { body, method, path };
  } else {
    return { method, path };
  }
};

// Example HTTP request body

// const reqbody = `GET /red HTTP/1.1
// User-Agent: PostmanRuntime/7.26.8
// Accept: */*
// Postman-Token: b5b2d7cc-0e4b-4603-bb9e-252f9f32db7b
// Host: localhost:7890
// Accept-Encoding: gzip, deflate, br
// Connection: keep-alive

// {"name":"spot", "age":5, "weight":"20 lbs"}`;
