import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  height: 100%;
`;
export const Section = styled.section`
  border: 2px solid;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InstaPhoneImage = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  width: 400px;
  height: 600px;
`;
export const RenderdImages = styled.div`
  position: relative;
  width: 58%;
  top: 97px;
  left: 147px;
  height: 69.3%;
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
