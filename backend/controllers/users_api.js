const User = require("../models/User");

const userLogin = async (request, response) => {};

const createNewUser = async (request, response) => {
  try {
    const user = await User.findOne({
      emailOrMobile: request.body.emailOrMobile,
    });
    if (user) {
      return response.status(422).json({
        message: "User already exist",
        data: { data: user },
      });
    } else {
      try {
        const newUser = new User({ ...request.body });
        await newUser.save();
        return response.status(200).json({
          message: "User registerd succesfully",
        });
      } catch (error) {
        console.log(error);
        return response.status(422).json({
          message: "Error while creating user",
        });
      }
    }
  } catch (error) {
    // console.log(error);
    return response.status(500).json({
      message: "Internal server Error",
    });
  }
};

module.exports = { createNewUser, userLogin };
