import styled from "styled-components";

export const Image = styled.img`
  width: ${({ width }) => (width ? width : "100px")};
  height: ${({ height }) => (height ? height : "100px")};
`;
