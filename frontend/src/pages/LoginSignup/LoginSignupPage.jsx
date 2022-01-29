import React, { useEffect, useState } from "react";
import ImageComponent from "../../components/IMG/ImageComponent";

import FormInputComponent from "../../components/Form Input/FormInputComponent";
import CustomButtonComponent from "../../components/custom button/CustomButtonComponent";
import {
  LoginSignupContainer,
  InstaPhoneImage,
  Section,
  RenderdImages,
  GlobalCssForLoginSignup,
  FacebookLogin,
  Form,
  FormContainer,
  LoginButton,
  Signup,
  GetTheApp,
  StoreLink,
} from "./LoginSignupPage_style";

// Material UI
import FacebookIcon from "@mui/icons-material/Facebook";

// custom Hooks
import useLoginSignup from "../../Custom Hooks/useLoginSignup";
const LoginSignupPage = () => {
  const [imageNumber, setImageNumber] = useState(1);
  const [images, setImages] = useState([]);

  const [loginData, setLoginData] = useLoginSignup("login");
  const { username, password } = loginData;

  useEffect(() => {
    setImages([
      { url: "/images/screenshot1.jpg", index: 1 },
      { url: "/images/screenshot2.jpg", index: 2 },
      { url: "/images/screenshot3.jpg", index: 3 },
      { url: "/images/screenshot4.jpg", index: 4 },
      { url: "/images/screenshot5.jpg", index: 5 },
    ]);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (imageNumber === 5) {
        setImageNumber(1);
      } else {
        setImageNumber((prev) => ++prev);
      }
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [imageNumber]);

  return (
    <>
      <LoginSignupContainer>
        <Section>
          <GlobalCssForLoginSignup />
          <InstaPhoneImage image="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png">
            <RenderdImages>
              {images.map(({ url, index }) => (
                <ImageComponent
                  className={`${
                    imageNumber === index
                      ? "visible fade-appear-active"
                      : "invisible fade-appear"
                  }`}
                  key={index}
                  image={url}
                  alt=""
                  width="100%"
                  height="100%"
                />
              ))}
            </RenderdImages>
          </InstaPhoneImage>
          <FormContainer>
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

            <Signup>
              Don't have an account? <span>Sign up</span>
            </Signup>

            <GetTheApp>
              <span>Get the app.</span>
              <StoreLink>
                <ImageComponent image={"/images/appStore.jpg"} />
                <ImageComponent image={"/images/playStore.jpg"} />
              </StoreLink>
            </GetTheApp>
          </FormContainer>
        </Section>
      </LoginSignupContainer>
    </>
  );
};

export default LoginSignupPage;
// harsh
