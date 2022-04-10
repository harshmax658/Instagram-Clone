const express = require("express");
const router = express.Router();
// const user = (request, response, done) => {
//   //   console.log(request);
//   //   if (request && request.cookies) {
//   console.log(request.cookies.userToken);
//   //   }
//   done(null, true);
// };
router.use("/api", require("./api/index"));

module.exports = router;

("localhost:8000//api/post/:id");
