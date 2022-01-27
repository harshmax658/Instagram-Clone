import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const LoginButton = styled.div`
  margin: 15px 0;
`;

export const FacebookLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 69%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px;
  border: 1px solid lightgray;

  input {
    margin: 4px 0;
    border-radius: 5px;
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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  height: 100%;
  overflow-x: auto;
`;
export const Section = styled.section`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
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
  /* animation-duration: 2s; */
  /* transition-delay: 1s;
  animation-timing-function: ease-in-out; */
}
.fade-appear-active{
  /* opacity: 1;
  transition: opacity 500ms ease-out;     */
  /* animation: fadeIn; */
  animation: fadeOut;
  /* transition-delay: 2s; */
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
