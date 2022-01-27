import styled from "styled-components";

export const FormInputGroup = styled.div`
  position: relative;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  background: none;
  outline: none;
  border: 1px solid lightgray;
`;

export const FormLabel = styled.label`
  position: absolute;
  left: 11px;
  pointer-events: none;
  color: gray;
  font-size: 13px;
  width: 100%;
  top: 14px;
`;
