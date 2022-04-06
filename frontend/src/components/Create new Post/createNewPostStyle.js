import styled from "styled-components";

export const NewPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70%;
`;
export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-radius: 20px;
  }
`;
export const SelectFile = styled.div`
  position: relative;
  text-align: center;

  & label {
    position: relative;
    cursor: pointer;
    border: 2px solid;
    background-color: #0095f6;
    color: white;
    width: auto;
    /* text-align: center; */
    font-size: 1.1rem;
    padding: 6px;
    border-radius: 6px;
  }
  & input[type="file"] {
    display: none;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 100;
  }
`;
export const H2 = styled.h2`
  font-size: 1.1rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
export const Heading = styled.div`
  border-bottom: 1px solid lightgray;
  width: 100%;
  text-align: center;
`;
