import styled from "styled-components";
import { createGlobalStyle, css } from "styled-components";

const displayFlexJCAIC = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginSignupContainer = styled.div`
  ${displayFlexJCAIC}
  background-color: #fafafa;
  height: 100%;
  /* overflow-x: auto; */
`;
export const Section = styled.section`
  ${displayFlexJCAIC}
  width: 80%;
  position: relative;
  top: 33px;
  left: -28px;
`;
export const InstaPhoneImage = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  width: 42%;
  height: 600px;
`;
export const RenderdImages = styled.div`
  position: relative;
  width: 55.2%;
  top: 95.7px;
  left: 146px;
  height: 69.7%;
`;

export const GlobalCssForLoginSignup = createGlobalStyle`

.invisible{
  display: none;
}
.visible{
  display: block;
 
}

.fade-appear{
  opacity: 0;    
}
.fade-appear-active{
  animation: fadeOut;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: .9;
  }

  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  100% {
    opacity: 1;
  }

  0% {
    opacity: 0.88;
  }
}
`;
//Harsh
