import styled from "styled-components";

export const CloseBtn = styled.button`
  background: none;
  outline: none;
  border: none;
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
  /* top: 3.5vh; */
  top: ${({ createNewPost }) => (createNewPost ? "15vh" : "3.5vh")};
  border-radius: ${({ createNewPost }) => (createNewPost ? "15px" : "5px")};
  margin: 0 auto;
  z-index: 30;
  height: ${({ createNewPost }) => (createNewPost ? "70vh" : "92.5vh")};

  width: ${({ createNewPost }) => (createNewPost ? "30%" : "77%")};
  background: white;
  overflow: hidden;
`;
