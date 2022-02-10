import styled from "styled-components";

export const Section = styled.section`
  z-index: 11;

  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ call }) =>
    call &&
    ` &::before {
    content: "";
    position: fixed;
    background: black;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    opacity: 0.2;
  }`}
`;

export const Post = styled.div`
  position: fixed;
  top: 10vh;
  /* border: 2px solid; */
  /* height: 100%; */
  z-index: 30;
  height: 80vh;
  width: 85%;
  background: white;

  img {
    /* width: 20%; */
  }
`;
