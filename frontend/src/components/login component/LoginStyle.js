import styled, { css } from "styled-components";

const border = css`
  border: 1px solid lightgray;
`;
const displayFlexJCAIC = css`
  display: flex;
  justify-content: center;
  align-items: center;
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
