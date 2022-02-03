import React, { useEffect, useState } from "react";
import ImageComponent from "../../components/IMG/ImageComponent";

import {
  LoginSignupContainer,
  InstaPhoneImage,
  Section,
  RenderdImages,
  GlobalCssForLoginSignup,
} from "./LoginSignupPage_style";

import LoginComponent from "../../components/login component/LoginComponent";

const LoginSignupPage = () => {
  const [imageNumber, setImageNumber] = useState(1);
  const [images, setImages] = useState([]);

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
          {/* LoginComponent */}
          <LoginComponent />
        </Section>
      </LoginSignupContainer>
    </>
  );
};

export default LoginSignupPage;
// harsh
