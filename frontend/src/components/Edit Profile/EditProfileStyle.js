import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const Container = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 70%;
  border: 1px solid;
`;
export const ChangeProfilePhoto = styled.div`
  display: flex;
`;
export const ChangeButton = styled.div``;
export const Input = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: baseline;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;

    /* label {
          position: inherit;
          order: 1;
          color: black;
      font-size: 1rem;
      width: 20%;
    } */
    /* input {
        order: 2;
        width: 80%;
    } */
  }
  p {
    /* position: absolute; */
    /* right: 0; */
  }
`;

export const Notice = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  p {
    font-size: 14px;
    margin: 10px 0;
    span {
      display: block;
      margin-top: 5px;
    }
  }
`;
