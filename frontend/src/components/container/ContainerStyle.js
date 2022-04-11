import styled, { css } from "styled-components";
const border = css`
  border: 1px solid lightgray;
`;

export const Container = styled.div`
  ${({ width }) => width && `width:${width}`};
  ${border}
`;
//Harsh
