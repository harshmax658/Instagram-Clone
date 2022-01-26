import React, { useEffect, useState } from "react";
import {
  Container,
  InstaPhoneImage,
  Section,
  RenderdImages,
  GlobalCssForLoginSignup,
} from "./LoginSignupPage_style";
import ImageComponent from "../components/IMG/ImageComponent";

const LoginSignupPage = () => {
  const [imageNumber, setImageNumber] = useState(1);
  const [images, setImages] = useState([
    { url: "/images/screenshot1.jpg", index: 1 },
    { url: "/images/screenshot2.jpg", index: 2 },
    { url: "/images/screenshot3.jpg", index: 3 },
    { url: "/images/screenshot4.jpg", index: 4 },
    { url: "/images/screenshot5.jpg", index: 5 },
  ]);
  useEffect(() => {}, []);
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
      <Container>
        <Section>
          <InstaPhoneImage image="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png">
            <GlobalCssForLoginSignup />
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
        </Section>
      </Container>
    </>
  );
};

export default LoginSignupPage;
// harsh
