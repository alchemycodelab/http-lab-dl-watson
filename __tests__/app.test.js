// lol here we go again
const request = require("supertest");
const app = require("../lib/app");

describe("app routes", () => {
  it("returns hi", async () => {
    const res = await request(app).get("/");
    expect(res.text).toEqual("hi");
  });

  it("returns status code 200 and plain text with the request body", async () => {
    const res = await request(app).post("/echo").send("echo");
    expect(res.text).toEqual("echo");
  });

  it("returns HTML with an h1 and the word red", async () => {
    const res = await request(app).get("/red");

    expect(res.text).toEqual(
      `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>red</h1>
</body>
</html>`
    );
  });

  it("returns HTML with an h1 and the word blue", async () => {
    const res = await request(app).get("/blue");

    expect(res.text).toEqual(
      `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>blue</h1>
</body>
</html>`
    );
  });

  it("returns HTML with an h1 and the word green", async () => {
    const res = await request(app).get("/green");

    expect(res.text).toEqual(
      `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>green</h1>
</body>
</html>`
    );
  });
});
