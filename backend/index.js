const express = require("express");
const app = express();
const passport = require("passport");
const cookieParser = require("cookie-parser");

const path = require("path");
// mongoose Db configuration
app.use(express.json());
require("./config/mongoose/config");

app.use(cookieParser());

require("./config/passport js/config");
app.use(passport.initialize());
const routerPath = path.join(__dirname, "/routes");
<<<<<<< HEAD
const imagePath  = express.static(__dirname+"/Images")
app.use('/images',imagePath);
=======

>>>>>>> 023665faff6329e3efd29e34c2d47650b1cf8276
app.use(require(routerPath));

app.listen(8000, () => {
  console.log("Server start");
});
