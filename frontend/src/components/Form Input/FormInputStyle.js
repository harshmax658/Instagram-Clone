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
  padding: 13px;
  padding-bottom: 8px;
  background: none;
  outline: none;
  border: 1px solid lightgray;
`;

export const FormLabel = styled.label`
  position: absolute;
  left: 12px;
  pointer-events: none;
  color: gray;
  font-size: 14px;
  width: 100%;
  top: 16px;
  transition: all 100ms ease-out;
  ${(props) => (props.shrink ? shrink : "")}
`;
