import styled from "styled-components";
export const HeaderDownSpace = styled.div`
  height: 90px;
`;

export const IconStyle = styled.div``;
export const Container = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  z-index: ${({ call }) => (call ? "3" : "30")};
  display: flex;
  padding: 10px 0px 7px 0px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  outline: none;
  border: none;
  background: inherit;
`;
export const SearchContainer = styled.div`
  background: #efefef;
  display: flex;
  padding: 6px 10px;
  border-radius: 6px;
`;
export const IconsContainer = styled.div`
  display: flex;

  width: 36%;
  justify-content: space-evenly;
  padding: 0px 22px 0 55px;
`;
export const Right = styled.div`
  width: 28%;
`;
export const Left = styled.div`
  margin-top: 7px;
  width: 36%;
`;
export const Center = styled.div`
  display: flex;
  width: 80%;
  max-width: 975px;
  padding: 0 20px;
  width: 100%;
  align-items: center;
`;
//hem
