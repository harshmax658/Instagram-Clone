const express = require("express");
const app = express();

const path = require("path");

const routerPath = path.join(__dirname, "/routes");
app.use(require(routerPath));

app.listen(8000, () => {
  console.log("Server start");
});
