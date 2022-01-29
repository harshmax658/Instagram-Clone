import styled from "styled-components";
import { createGlobalStyle, css } from "styled-components";

const border = css`
  border: 1px solid lightgray;
`;
const displayFlexJCAIC = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GetTheApp = styled.div`
  text-align: center;
  margin: 25px 0;
`;

export const StoreLink = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;

  img {
    width: 140px;
    height: 40px;
    cursor: pointer;
  }
`;
export const Signup = styled.div`
  ${border}
  height: 66px;
  margin: 10px 0;

  ${displayFlexJCAIC}
  span {
    color: #0095f6;
    cursor: pointer;
    margin: 0 5px;
  }
`;
export const LoginButton = styled.div`
  margin: 15px 0;
`;

export const FacebookLogin = styled.div`
  ${displayFlexJCAIC}
  width: 100%;
  color: #385185;
  margin: 25px 0;
  cursor: pointer;

  &::selection {
    user-select: none;
  }

  .fbIcon {
    font-size: 1px;
    margin-right: 5px;
  }
`;

export const FormContainer = styled.div`
  width: 34%;
  height: 537px;
`;

export const Form = styled.div`
  ${border}
  height: 67%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px;

  input {
    margin: 4px 0;
    border-radius: 5px;
    padding-top: 16px;
    padding-bottom: 4px;
    font-size: 12px;
  }

  .instaLogo {
    text-align: center;
  }
  a {
    text-align: center;
    text-decoration: none;
    font-size: 13.6px;
    color: #8b8888;
  }
`;

export const LoginSignupContainer = styled.div`
  ${displayFlexJCAIC}
  background-color: #fafafa;
  height: 100%;
  overflow-x: auto;
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
.or{
  ${displayFlexJCAIC}
  width: 100%;
  color: gray;

  .first,.third{
border-bottom: 1px solid lightgray;
width: 100%;
height: 1px;
  }

  .first{
    margin-right: 22px;
  }
  .third{
    margin-left: 22px;
  }
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
