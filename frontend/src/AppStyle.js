import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
export const AppStyle = styled.div`
  height: 100%;
`;
export const GlobalStyleCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* html, */
body {
  width: 100%;
  height: 100vh;
}
#root{
  height: 100%
}

#overlay{
  display: flex;
  justify-content:center;
  /* align-items: center; */
}
`;
