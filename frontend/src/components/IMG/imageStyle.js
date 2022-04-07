import styled from "styled-components";

export const Image = styled.img`
  ${({ style }) => style}
  width: ${({ width }) => (width ? width : "100px")};
  height: ${({ height }) => (height ? height : "100px")};
`;
//Harsh
