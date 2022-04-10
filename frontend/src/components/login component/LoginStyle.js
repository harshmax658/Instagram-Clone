import styled, { css, createGlobalStyle } from "styled-components";

const displayFlexJCAIC = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GlobalCssForLogin = createGlobalStyle`
 button:disabled,
  button[disabled] {
    background-color: #0095f675;
    cursor: initial;
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
`;
export const P = styled.p`
  font-size: 14px;
  text-align: center;
  &.danger {
    color: red !important;
  }
`;
export const FormContainer = styled.div`
  /* width: 34%; */
  width: 355px;
  height: 537px;
`;

export const Form = styled.form`
  height: 67%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px;

  input {
    width: 100%;
    margin: 4px 0;
    border-radius: 3px;
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

export const Signup = styled.div`
  div {
    height: 66px;
    margin: 10px 0;
    width: 100%;
    ${displayFlexJCAIC}
  }

  span {
    color: #0095f6;
    cursor: pointer;
    margin: 0 5px;
  }
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

export const GetTheApp = styled.div`
  text-align: center;
  margin: 25px 0;
`;
//Harsh
