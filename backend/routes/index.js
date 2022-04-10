const express = require("express");
const router = express.Router();

router.get("/first", (req, res) => {
  return res.status(200).json({
    msg: "jai shree ram",  //jai shree ram 
  });
});

module.exports = router;
