import React, { useEffect, useState } from "react";
import {
  Container,
  InstaPhoneImage,
  Section,
  RenderdImages,
} from "./LoginSignupPage_style";
import ImageComponent from "../components/IMG/ImageComponent";

const LoginSignupPage = () => {
  const [imageNumber, setImageNumber] = useState([1, 2, 3, 4, 5]);

  return (
    <>
      <Container>
        <Section>
          <InstaPhoneImage image="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png">
            <RenderdImages>
              {imageNumber.map((data) => (
                <ImageComponent
                  className="hide"
                  key={data}
                  image={`/images/screenshot${data}.jpg`}
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
