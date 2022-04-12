const User = require("../models/User");

<<<<<<< HEAD
const userLogin = async (request, response) => {};
=======
const getUserDetails = async (request, response) => {
  try {
    console.log();
    const id = request.user.id;
    const user = await User.findById(id);
    if (user) {
      return response.status(200).json({
        message: "user datails found",
        data: {
          data: user,
        },
      });
    }
    return response.status(422).json({
      message: "user datails not found",
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: "Internal Server error",
    });
  }
};

const sendUserJwt = async (request, response) => {
  return response.status(200).json({
    message: "user token",
    userToken: request.cookies.userToken,
  });
};

const userLogin = async (request, response) => {
  try {
    const user = await User.findOne({
      $or: [
        { usernNme: request.body.userName },
        { emailOrMobile: request.body.userName },
      ],
    }).select("password");
    if (user.password === request.body.password) {
      user["password"] = null;
      const token = User.generateToken(user, "H@rsh", "30d");
      response.cookie("userToken", token, {
        secure: true,
        httpOnly: true,
        expires: new Date("01 12 2024"),
        sameSite: "lax",
      });
      return response
        .status(200)
        .json({ message: "User login details match", userToken: token });
    } else {
      return response
        .status(422)
        .json({ message: "User login details did'nt match" });
    }
  } catch (error) {
    return response.status(500).json({ message: "Internal server error" });
  }
};

>>>>>>> 023665faff6329e3efd29e34c2d47650b1cf8276
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

module.exports = { createNewUser, userLogin, sendUserJwt, getUserDetails };
