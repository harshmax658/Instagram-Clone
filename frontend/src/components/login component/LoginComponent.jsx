import React from "react";

import FormInputComponent from "../../components/Form Input/FormInputComponent";
import CustomButtonComponent from "../../components/custom button/CustomButtonComponent";
import ImageComponent from "../../components/IMG/ImageComponent";

import ContainerComponent from "../container/ContainerComponent";
import {
  FacebookLogin,
  Form,
  FormContainer,
  LoginButton,
  Signup,
  GetTheApp,
  StoreLink,
} from "./LoginStyle";

// Material UI
import FacebookIcon from "@mui/icons-material/Facebook";

// custom Hooks
import useLoginSignup from "../../Custom Hooks/useLoginSignup";

const LoginComponent = () => {
  const [loginData, setLoginData] = useLoginSignup("login");
  const { username, password } = loginData;

  return (
    <>
      <FormContainer>
        <ContainerComponent>
          <Form>
            <div className="instaLogo">
              <ImageComponent
                image={`/images/instagram.jpg`}
                style={{ width: 183, height: 60 }}
              />
            </div>
            <FormInputComponent
              label="Phone number, username, or email"
              name="username"
              type="text"
              value={username}
              onChange={setLoginData}
            />
            <FormInputComponent
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={setLoginData}
            />
            <LoginButton>
              <CustomButtonComponent
                disabled={"disabled"}
                // onClick={() => console.log("da")}
              >
                Log in
              </CustomButtonComponent>
            </LoginButton>

            <div className="or">
              <div className="first"></div>
              <div className="sec">OR</div>
              <div className="third"></div>
            </div>
            <FacebookLogin>
              <span className="fbIcon">
                <FacebookIcon />
              </span>
              <span className="fbLogin">Log in with Facebook</span>
            </FacebookLogin>

            <a href="#">Forgot password?</a>
          </Form>
        </ContainerComponent>
        <Signup>
          <ContainerComponent>
            <div>
              Don't have an account? <span>Sign up</span>
            </div>
          </ContainerComponent>
        </Signup>
        <GetTheApp>
          <span>Get the app.</span>
          <StoreLink>
            <ImageComponent image={"/images/appStore.jpg"} />
            <ImageComponent image={"/images/playStore.jpg"} />
          </StoreLink>
        </GetTheApp>
      </FormContainer>
    </>
  );
};

export default LoginComponent;
// Harsh
