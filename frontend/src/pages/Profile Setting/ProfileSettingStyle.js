import styled from "styled-components";
export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Left = styled.div`
  display: flex;

  flex-direction: column;
  border-right: 1px solid lightgray;
  width: 26%;

  a {
    color: black;
    text-decoration: none;
    height: 48px;
    display: flex;
    align-items: center;
    padding-left: 35px;
    /* margin: 1px 0; */
    position: relative;

    &:hover::before {
      /* border-left: 2px solid lightgray;
      /* &::before { */
      content: "";
      position: absolute;

      left: 0;
      border-left: 2px solid #a5a3a3b8;
      height: 100%;
      /* } */
    }
    &:hover {
      background-color: #a5a3a314;
    }
  }
  .active {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      border-left: 2px solid black;
      height: 100%;
    }

    &:hover {
      background-color: white;
      &::before {
        border-left: 2px solid black;
      }
    }
  }
`;
export const Right = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  width: 70%;
`;
export const Dinline = styled.div`
  display: flex;
`;
