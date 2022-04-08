import styled, { css, createGlobalStyle } from "styled-components";

const displayFlexJCAIC = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const margin = (x, y, a = 0, b = 0) => {
  if (a > 0) {
    if (b > 0) {
      return `margin:${x} ${y} ,${a},${b};`;
    } else {
      return `margin:${x} ${y} ,${a};`;
    }
  } else if (y) {
    return `margin:${x} ${y}; `;
  } else {
    return `margin:${x}; `;
  }
};
export const Box = styled.div`
  width: 355px;
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.h2`
  position: relative;
  font-size: 17px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
  font-weight: 600;
  color: #8e8e8e;
`;
export const Signup = styled.div`
  width: 100%;
`;
export const P = styled.p`
  font-size: 14px;
  text-align: center;
`;
export const Login = styled.div`
  width: 100%;
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

export const Form = styled.form`
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  ${margin("22px", "0")}

  input {
    width: 100%;
    ${margin("4px", "0")}
    border-radius: 3px;
  }
  button {
    ${displayFlexJCAIC}
    background-color:#0095f6;
    margin: 20px 0;
    .fbLogin {
      font-size: 0.8rem;
      margin: 0 6px;
    }
  }
`;
export const OrPartation = styled.div`
  display: flex;
  color: #a7a7a7;
`;
export const GlobalCssForSignup = createGlobalStyle`
  .or{
  ${displayFlexJCAIC}
  width: 100%;
  color: gray;

  .first,.third{
border-bottom: 1.4px solid lightgray;
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
export const GetTheApp = styled.div`
  text-align: center;
  ${margin("10px", "0")}
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
//Harsh
