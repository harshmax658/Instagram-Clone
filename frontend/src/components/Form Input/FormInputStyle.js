import styled, { css } from "styled-components";

const shrink = css`
  top: 6px;
  font-size: 13px;
`;

export const FormInputGroup = styled.div`
  position: relative;
  width: 100%;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0 11px;
  height: 40px;
  /* padding-bottom: 10px; */
  background: none;
  outline: none;
  border: 1px solid lightgray;
  ${({ value }) => value && "padding: 14px 28px 2px 8px"};
`;

export const FormLabel = styled.label`
  position: absolute;
  left: 11px;
  /* pointer-events: none; */
  cursor: text;

  color: gray;
  font-size: 14px;
  width: 100%;
  top: 16px;
  transition: all 100ms ease-out;
  ${(props) => (props.shrink ? shrink : "")}
`;
//Harsh
