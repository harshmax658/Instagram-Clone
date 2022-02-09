import styled from "styled-components";

export const Section = styled.section`
  z-index: 11
  color: black;
  display:flex;
  justify-content:center;
  align-items:center;
  
  ${({ call }) =>
    call &&
    ` &::before {
    content: "";
    position: absolute;
    background: black;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.2;
  }`}
 
`;

export const Post = styled.div`
  border: 2px solid;
  height: 350px;
  width: 80%;

  img {
    /* width: 20%; */
  }
`;
