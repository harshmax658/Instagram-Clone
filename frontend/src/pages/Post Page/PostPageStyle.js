import styled from "styled-components";

export const CloseBtn = styled.div`
  color: #ffffff;
  position: absolute;
  top: 20px;
  right: 20px;
  transform: scale(1.6);
  z-index: 100;
  cursor: pointer;
`;

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
    opacity: 0.7;
  }`}
`;

export const Post = styled.div`
  ${({ call }) => call && "position: fixed;"}
  top: 3.5vh;
  border-radius: 5px;
  margin: 0 auto;
  z-index: 30;
  height: 92.5vh;
  width: 77%;
  background: white;

  img {
    /* width: 20%; */
  }
`;
