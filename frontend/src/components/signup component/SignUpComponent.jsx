import React, { useState } from "react";

import {
  Signup,
  Center,
  Form,
  H2,
  Box,
  GlobalCssForSignup,
  P,
  Login,
  StoreLink,
  GetTheApp,
  FormLayer,
  Birthday,
  Date,
  ImageBackGround,
} from "./SignUpStyle";
import ContainerComponent from "../container/ContainerComponent";

import FormInputComponent from "../Form Input/FormInputComponent";

import CustomButtonComponent from "../custom button/CustomButtonComponent";
import FacebookIcon from "@mui/icons-material/Facebook";
import ImageComponent from "../IMG/ImageComponent";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import useLoginSignup from "../../Custom Hooks/useLoginSignup";

import { useDispatch, useSelector } from "react-redux";
import { signUpStart } from "../../redux/user/action";
import { useNavigate } from "react-router-dom";

const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new window.Date();

const SignUpComponent = ({ login }) => {
  const navigate = useNavigate();
  const [data] = useState({
    day: date.getDate(),
    month: monthsArray[date.getMonth()],
    year: date.getFullYear(),
  });
  const [takeBirthday, setTakeBirthday] = useState(false);

  const dispatch = useDispatch();
  const { error } = useSelector(({ userReducer }) => userReducer);
  const [signUpData, setSignUpData] = useLoginSignup({
    emailOrMobile: "",
    fullName: "",
    userName: "",
    password: "",
    day: date.getDate(),
    month: monthsArray[date.getMonth()],
    year: date.getFullYear(),
  });

  const { emailOrMobile, fullName, userName, password, day, month, year } =
    signUpData;

  const datesGenerator = (name) => {
    if (name === "day") {
      let day = [];
      for (let i = 31; i >= 1; --i) {
        day[i - 1] = i;
      }
      return day;
    } else if (name === "month") {
      return monthsArray;
    } else if (name === "year") {
      let year = [];
      for (let i = data.year; i >= 1920; --i) {
        year[i] = i;
      }
      return year.reverse();
    }
  };
  const onSelectData = (data) => {
    return datesGenerator(data).map((data, id) => {
      return (
        <option value={data} key={id}>
          {data}
        </option>
      );
    });
  };
  const createUserAccount = (event) => {
    event.preventDefault();
    if (takeBirthday) {
      if (
        emailOrMobile &&
        fullName &&
        userName &&
        password &&
        day &&
        month &&
        year
      ) {
        dispatch(signUpStart({ signUpData, navigate }));
      } else {
        console.log("nhi ho payega");
      }
    } else {
      if (emailOrMobile && fullName && userName && password) {
        setTakeBirthday(true);
      }
    }
  };
  return (
    <>
      <Box>
        <ContainerComponent>
          {!takeBirthday ? (
            <Signup>
              <Form onSubmit={createUserAccount}>
                <div className="instaLogo">
                  <ImageComponent
                    image={`/images/instagram.jpg`}
                    style={{ width: 183, height: 60 }}
                  />
                </div>
                <H2>Sign up to see photos and videos from your friends.</H2>
                <CustomButtonComponent>
                  <span className="fbIcon">
                    <FacebookIcon />
                  </span>
                  <span className="fbLogin">Log in with Facebook</span>
                </CustomButtonComponent>
                <div className="or">
                  <div className="first"></div>
                  <div className="sec">OR</div>
                  <div className="third"></div>
                </div>
                <FormLayer>
                  <FormInputComponent
                    label="Mobile Number or Email"
                    name="emailOrMobile"
                    value={emailOrMobile}
                    onChange={setSignUpData}
                    id="emailOrMobile"
                    htmlFor="emailOrMobile"
                  />
                  {emailOrMobile && (
                    <span>
                      <CheckCircleOutlineIcon />
                    </span>
                  )}
                </FormLayer>
                <FormLayer>
                  <FormInputComponent
                    label="Full Name"
                    name="fullName"
                    onChange={setSignUpData}
                    value={fullName}
                    id="fullName"
                    htmlFor="fullName"
                  />
                  {fullName && (
                    <span>
                      <CheckCircleOutlineIcon />
                    </span>
                  )}
                </FormLayer>
                <FormLayer>
                  <FormInputComponent
                    label="Username"
                    name="userName"
                    onChange={setSignUpData}
                    value={userName}
                    id="userName"
                    htmlFor="userName"
                  />
                  {userName && (
                    <span>
                      <CheckCircleOutlineIcon />
                    </span>
                  )}
                </FormLayer>
                <FormLayer>
                  <FormInputComponent
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    onChange={setSignUpData}
                    value={password}
                    id="password"
                    htmlFor="password"
                  />
                  {password && (
                    <span>
                      <CheckCircleOutlineIcon />
                    </span>
                  )}
                </FormLayer>
                <CustomButtonComponent
                  disabled={
                    !(emailOrMobile && fullName && userName && password) && true
                  }
                >
                  <span className="fbLogin">Sign up</span>
                </CustomButtonComponent>

                <P>
                  By signing up, you agree to our Terms , Data Policy and
                  Cookies Policy .
                </P>
              </Form>
            </Signup>
          ) : (
            <Birthday>
              <ImageBackGround image="/images/allInOne.jpg" />

              <div className="addBird">
                <P>Add Your Birthday</P>
              </div>
              <div className="description">
                <span>This won't be a part of your public profile.</span>
                <span>Why do I need to provide my birthday?</span>
              </div>
              <Date>
                <div className="user_selection">
                  <div className="select">
                    <select
                      name="month"
                      id="month"
                      className="selectItem"
                      value={month}
                      onChange={setSignUpData}
                    >
                      {onSelectData("month")}
                    </select>
                    <select
                      name="day"
                      id="day"
                      className="selectItem"
                      value={day}
                      onChange={setSignUpData}
                    >
                      {onSelectData("day")}
                    </select>
                    <select
                      name="year"
                      id="year"
                      className="selectItem"
                      value={year}
                      onChange={setSignUpData}
                    >
                      {onSelectData("year")}
                    </select>
                  </div>
                </div>
              </Date>

              <div className="why">
                <div> You need to enter the date you were born</div>
                <div>
                  Use your own birthday, even if this account is for a business,
                  a pet, or something else
                </div>
              </div>
              <div className="btn">
                <CustomButtonComponent
                  disabled={year > 2017 && true}
                  onClick={createUserAccount}
                >
                  <span className="fbLogin">Next</span>
                </CustomButtonComponent>
              </div>
              <div
                className="goBack"
                onClick={() => setTakeBirthday(!takeBirthday)}
              >
                Go Back
              </div>
            </Birthday>
          )}
          {error?.message && <P className="error">{error.message}</P>}
        </ContainerComponent>
        <Login>
          <ContainerComponent>
            <div>
              Have an account? <span onClick={() => login(true)}> Log in </span>
            </div>
          </ContainerComponent>
        </Login>
        <GetTheApp>
          <span>Get the app.</span>
          <StoreLink>
            <ImageComponent image={"/images/appStore.jpg"} />
            <ImageComponent image={"/images/playStore.jpg"} />
          </StoreLink>
        </GetTheApp>
      </Box>
      <GlobalCssForSignup />
    </>
  );
};

export default SignUpComponent;
// Harsh
