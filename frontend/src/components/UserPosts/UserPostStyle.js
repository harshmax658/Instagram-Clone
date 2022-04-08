import styled from "styled-components";

export const AllPostGrid = styled.div`
  display: flex;
  flex-wrap: wrap;

  & :nth-child(3n) {
    margin-right: 0px;
  }
`;
export const Post = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  margin-right: 23.5px;
  top: 0;
  left: 0;
  position: relative;
`;
//Harsh
