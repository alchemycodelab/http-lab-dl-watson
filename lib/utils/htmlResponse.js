// helper function that takes in a color (as a string) and returns a generic HTML layout with an h1 displaying the passed color
module.exports = (color) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>${color}</h1>
</body>
</html>`;
};
