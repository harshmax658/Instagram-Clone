import styled from "styled-components";

export const MainPage = styled.div`
  /* position: relative; */
  padding-top: 85px;
  /* top: 85px; */
  height: 100%;
  ${({ newPost }) => newPost && " position: fixed;"}
  width: 100%;
`;
