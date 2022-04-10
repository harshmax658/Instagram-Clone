const express = require("express");
const router = express.Router();


// router.get("/first", (req, res) => {
//   return res.status(200).json({
//     msg: "jai shree ram",  //jai shree ram 
//   });
// });

router.use("/api", require("./api/index"));


module.exports = router;

// ("localhost:8000//api/post/:id");
