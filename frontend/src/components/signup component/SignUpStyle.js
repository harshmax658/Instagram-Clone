import styled, { css, createGlobalStyle } from "styled-components";

const displayFlexJCAIC = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GlobalCssForSignup = createGlobalStyle`
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
export const Signup = styled.div`
  width: 350px;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
`;
export const Form = styled.form`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  input {
    width: 100%;
    margin: 4px 0;
    border-radius: 3px;
  }
`;
export const OrPartation = styled.div`
  content: "OR";
  color: #a7a7a7;
  &::before {
    content: "";
    background-color: #a7a7a7;
    height: 1px;
    width: 30%;
    position: absolute;
    top: 8px;
    left: 41px;
  }
  &::after {
    content: "";
    background-color: #a7a7a7;
    height: 1px;
    width: 30%;
    position: absolute;
    top: 8px;
    right: 41px;
  }
`;
