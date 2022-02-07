import React from "react";

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
} from "./SignUpStyle";
import ContainerComponent from "../container/ContainerComponent";

import FormInputComponent from "../Form Input/FormInputComponent";

import CustomButtonComponent from "../custom button/CustomButtonComponent";
import FacebookIcon from "@mui/icons-material/Facebook";
import ImageComponent from "../IMG/ImageComponent";

import useLoginSignup from "../../Custom Hooks/useLoginSignup";

const SignUpComponent = ({ login }) => {
  const [signUpData, setSignUpData] = useLoginSignup({
    email: "",
    fullName: "",
    userName: "",
    password: "",
  });
  const { email, fullName, userName, password } = signUpData;
  return (
    <>
      <Box>
        <ContainerComponent>
          <Signup>
            <Form>
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
              <FormInputComponent
                label="Mobile Number or Email"
                name="email"
                value={email}
                onChange={setSignUpData}
              />
              <FormInputComponent
                label="Full Name"
                name="fullName"
                onChange={setSignUpData}
                value={fullName}
              />
              <FormInputComponent
                label="Username"
                name="userName"
                onChange={setSignUpData}
                value={userName}
              />
              <FormInputComponent
                label="Password"
                name="password"
                type="password"
                autoComplete="off"
                onChange={setSignUpData}
                value={password}
              />
              <CustomButtonComponent>
                <span className="fbLogin">Sign up</span>
              </CustomButtonComponent>

              <P>
                By signing up, you agree to our Terms , Data Policy and Cookies
                Policy .
              </P>
            </Form>
          </Signup>
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
