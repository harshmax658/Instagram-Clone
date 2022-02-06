import React from "react";

import {
  Signup,
  Center,
  Form,
  OrPartation,
  GlobalCssForSignup,
} from "./SignUpStyle";
import ContainerComponent from "../container/ContainerComponent";

import FormInputComponent from "../Form Input/FormInputComponent";

import CustomButtonComponent from "../custom button/CustomButtonComponent";
import FacebookIcon from "@mui/icons-material/Facebook";

const SignUpComponent = () => {
  return (
    <Center>
      <ContainerComponent>
        <Signup>
          <Form>
            <CustomButtonComponent>
              <span className="fbIcon">
                <FacebookIcon />
              </span>
              <span className="fbLogin">Log in with Facebook</span>
            </CustomButtonComponent>
            <OrPartation>
              <div className="first"></div>
              <div className="sec">OR</div>
              <div className="third"></div>
            </OrPartation>
            <FormInputComponent label="Mobile Number or Email" />
            <FormInputComponent label="Full Name" />
            <FormInputComponent label="Username" />
            <FormInputComponent label="Password" />
          </Form>
        </Signup>
      </ContainerComponent>
      <GlobalCssForSignup />
    </Center>
  );
};

export default SignUpComponent;
// Harsh
