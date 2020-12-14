// createResponse takes an object with body, contentText, and status. It should use that information to construct an HTTP response message. Make sure to set the:

// status
// Content-Length header
// Content-Type header
// HTTP body

module.exports = ({
  body = "",
  contentType = "text/html",
  status = "200 OK",
}) => {};
