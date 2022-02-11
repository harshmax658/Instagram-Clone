import styled from "styled-components";

export const HeaderDownSpace = styled.div`
  height: 90px;
`;
export const IconStyle = styled.div`
  // background-color: red;
`;

export const Container = styled.div`
  // background-color:skyblue;
  // display:flex;
  position: fixed;
  width: 100%;
  background: white;
  z-index: ${({ call }) => (call ? "3" : "30")};
  display: flex;
  padding: 1%;
  box-shadow: 1px 1px 1px 1px #e3dede;
`;

export const SearchContainer = styled.div`
  //  flex:1;
  //  display:flex;
  //  justify-content:center;
  // display: flex;
  // background: #e5dada;
  background: #ebe8e8;
  display: flex;
  padding: 1%;
  width: 60%;
  border-radius: 5px;
`;
export const IconsContainer = styled.div`
  //  flex:1;
  //  display:flex;
  //  justify-content:center;
  // display: flex;
  // grid-gap: 19%;
  display: flex;
  flex: 1;
  // background: red;
  grid-gap: -8px;
  grid-gap: 21px;
`;

export const Right = styled.div`
  // flex:1;
  // display:flex;
  // justify-content:space-evenly;
  // display: flex;
  // background: darkred;
  // width: 79%;
  // grid-gap: 9%;

  flex: 1;
  // background: burlywood;
  text-align: center;
`;

export const Left = styled.div`
  //  display:flex;
  //  flex:1;
  //  justify-content:center;
  // background: blue;
  // width: 55%;
  // display: flex;
  // justify-content: center;
  flex: 1;
  // background: burlywood;
  text-align: center;
`;

export const Image = styled.img``;

export const Input = styled.input`
  outline: none;
  border: none;
  background: inherit;
`;

//hem
