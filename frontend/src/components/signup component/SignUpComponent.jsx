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

const SignUpComponent = () => {
  return (
    <Center className="center">
      <Box className="box">
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
              <FormInputComponent label="Mobile Number or Email" />
              <FormInputComponent label="Full Name" />
              <FormInputComponent label="Username" />
              <FormInputComponent label="Password" />
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
              Have an account? <span>Log in </span>
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
    </Center>
  );
};

export default SignUpComponent;
// Harsh
