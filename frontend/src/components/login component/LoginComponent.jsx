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
  GlobalCssForLogin,
  P,
} from "./LoginStyle";

// Material UI
import FacebookIcon from "@mui/icons-material/Facebook";

// custom Hooks
import useLoginSignup from "../../Custom Hooks/useLoginSignup";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signInStart } from "../../redux/user/action";

const LoginComponent = ({ login }) => {
  const { error } = useSelector(({ userReducer }) => userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useLoginSignup({
    userName: "",
    password: "",
  });
  const { userName, password } = loginData;
  const loginuser = (event) => {
    event.preventDefault();
    dispatch(signInStart(loginData));
  };
  return (
    <FormContainer>
      <ContainerComponent>
        <Form onSubmit={loginuser}>
          <div className="instaLogo">
            <ImageComponent
              image={`/images/instagram.jpg`}
              style={{ width: 183, height: 60 }}
            />
          </div>
          <FormInputComponent
            label="Phone number, username, or email"
            name="userName"
            type="text"
            id="userName"
            htmlFor="userName"
            value={userName}
            onChange={setLoginData}
          />
          <FormInputComponent
            label="Password"
            name="password"
            type="password"
            id="password"
            htmlFor="password"
            autoComplete="off"
            value={password}
            onChange={setLoginData}
          />
          <LoginButton>
            <CustomButtonComponent disabled={!(userName && password) && true}>
              Log in
            </CustomButtonComponent>
          </LoginButton>

          {error && <P className="danger">{error.message}</P>}
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
            Don't have an account?
            <span
              onClick={() => (login ? login(false) : navigate("/emailsignup"))}
            >
              Sign up
            </span>
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
      <GlobalCssForLogin />
    </FormContainer>
  );
};

export default LoginComponent;
// Harsh
