
const mongoose = require("mongoose");

const url = `mongodb+srv://harshhem658:jaishreeram@cluster0.xs2qs.mongodb.net/instagram?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then(() => console.log("Server configuration setup Succesfully....."))
  .catch(() => {
    console.log("Oops.. There is an error in db Config");
  });
