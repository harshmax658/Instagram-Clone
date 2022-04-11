const express = require("express");
const app = express();

const path = require("path");
// mongoose Db configuration
require("./config/mongoose/config");
app.use(express.json());

const routerPath = path.join(__dirname, "/routes");
const imagePath  = express.static(__dirname+"/Images")
app.use('/images',imagePath);
app.use(require(routerPath));

app.listen(8000, () => {
  console.log("Server start");
});
