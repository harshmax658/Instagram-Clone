import styled from "styled-components";

export const HeaderDownSpace = styled.div`
  height: 90px;
`;
export const IconStyle = styled.div`
`;
export const Container = styled.div`
  
  position: fixed;
  width: 100%;
  background: white;
  z-index: ${({ call }) => (call ? "3" : "30")};
  display: flex;
  padding: 1%;
  box-shadow: 1px 1px 1px 1px #e3dede;
`;
export const SearchContainer = styled.div`
  
  background: #ebe8e8;
  display: flex;
  padding: 1%;
  width: 60%;
  border-radius: 5px;
`;
export const IconsContainer = styled.div`
  display: flex;
  flex: 1;
  grid-gap: -8px;
  grid-gap: 21px;
`;
export const Right = styled.div`
  flex: 1;
  text-align: center;
`;
export const Left = styled.div`
  flex: 1;
  text-align: center;
`;
export const Image = styled.img``;
export const Input = styled.input`
  outline: none;
  border: none;
  background: inherit;
`;

//hem
